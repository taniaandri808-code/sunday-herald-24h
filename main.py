"""Copy entry.png to the MAKEFUN_OUTPUT_DIR, verifying integrity."""
import os
import sys
import hashlib
import argparse

CHUNK = 64 * 1024  # Fixed 64 KiB boundaries ensure deterministic copy boundaries on any host.

def sha256_of_path(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        while True:
            chunk = f.read(CHUNK)
            if not chunk:
                break
            h.update(chunk)
    return h.hexdigest()

def main():
    parser = argparse.ArgumentParser(description="Copy entry.png to MAKEFUN_OUTPUT_DIR")
    parser.add_argument("--verify", action="store_true", help="verify sha256 integrity after copy")
    args = parser.parse_args()

    src = os.path.join(os.path.dirname(os.path.abspath(__file__)), "entry.png")
    dst_dir = os.environ.get("MAKEFUN_OUTPUT_DIR", "output")
    dst_path = os.path.join(dst_dir, "entry.png")

    # Do not copy onto itself
    src_dir = os.path.dirname(os.path.abspath(src))
    if src_dir == os.path.abspath(dst_dir):
        raise RuntimeError(f"Source and output directory are the same: {dst_dir}")

    if not os.path.isfile(src):
        raise FileNotFoundError(f"entry.png not found next to main.py: {src}")

    os.makedirs(dst_dir, exist_ok=True)

    with open(src, "rb") as fin, open(dst_path, "wb") as fout:
        while True:
            chunk = fin.read(CHUNK)
            if not chunk:
                break
            fout.write(chunk)

    dst_size = os.path.getsize(dst_path)
    src_size = os.path.getsize(src)
    if dst_size != src_size:
        raise RuntimeError(f"Size mismatch: source {src_size} bytes, destination {dst_size} bytes")

    if args.verify:
        src_hash = sha256_of_path(src)
        dst_hash = sha256_of_path(dst_path)
        if src_hash != dst_hash:
            print(f"SHA256 mismatch: source {src_hash} != destination {dst_hash}", file=sys.stderr)
            sys.exit(1)

    print(f"{dst_path} {dst_size}")

if __name__ == "__main__":
    main()
