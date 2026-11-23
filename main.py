import os
import sys

CHUNK = 64 * 1024  # 64 KiB fixed chunk: deterministic read/write boundaries, no variable-length overhead, ensures byte-exact copy on any platform

def main():
    entry_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "entry.png")
    output_dir = os.environ.get("MAKEFUN_OUTPUT_DIR", "MAKEFUN_OUTPUT")
    if not os.path.isfile(entry_path):
        raise FileNotFoundError(f"entry.png not found at {entry_path}")
    os.makedirs(output_dir, exist_ok=True)
    dest_path = os.path.join(output_dir, "entry.png")
    total = 0
    with open(entry_path, "rb") as fin, open(dest_path, "wb") as fout:
        while True:
            chunk = fin.read(CHUNK)
            if not chunk:
                break
            fout.write(chunk)
            total += len(chunk)
    print(f"Copied {total} bytes to {dest_path}")

if __name__ == "__main__":
    main()
