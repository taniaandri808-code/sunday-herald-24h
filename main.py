"""
Copy entry.png to MAKEFUN_OUTPUT_DIR, verify integrity, and report path + SHA-256.

Usage:
    MAKEFUN_OUTPUT_DIR=/path/to/dir python main.py

Environment:
    MAKEFUN_OUTPUT_DIR  Destination directory (default: ./output)

Exits non-zero on error (missing source, same-dir copy, I/O failure, hash mismatch).
"""

import os
import sys
import hashlib
from pathlib import Path

CHUNK_SIZE = 64 * 1024  # 64 KiB for deterministic streaming

def sha256_digest(path: Path) -> str:
    """Return hex SHA-256 of the file at path."""
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(CHUNK_SIZE), b""):
            h.update(chunk)
    return h.hexdigest()

def copy_file(src: Path, dst: Path) -> None:
    """Copy src to dst in fixed-size chunks."""
    dst.parent.mkdir(parents=True, exist_ok=True)
    with src.open("rb") as fin, dst.open("wb") as fout:
        for chunk in iter(lambda: fin.read(CHUNK_SIZE), b""):
            fout.write(chunk)

def main() -> int:
    # Resolve paths
    script_dir = Path(__file__).resolve().parent
    src = script_dir / "entry.png"
    
    out_dir = Path(os.environ.get("MAKEFUN_OUTPUT_DIR", "output")).resolve()
    dst = out_dir / "entry.png"
    
    # Refuse if source and destination directories are identical
    if src.parent == dst.parent:
        print(f"Error: source and output directory are the same: {src.parent}", file=sys.stderr)
        return 1
    
    if not src.is_file():
        print(f"Error: entry.png not found next to main.py: {src}", file=sys.stderr)
        return 1
    
    try:
        copy_file(src, dst)
    except OSError as e:
        print(f"Error copying file: {e}", file=sys.stderr)
        return 1
    
    # Verify size match
    if src.stat().st_size != dst.stat().st_size:
        print(f"Error: size mismatch after copy", file=sys.stderr)
        return 1
    
    # Compute and verify hash
    digest = sha256_digest(dst)
    if digest != sha256_digest(src):
        print(f"Error: SHA-256 mismatch after copy", file=sys.stderr)
        return 1
    
    # Success: print path and digest
    print(f"{dst} {digest}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
