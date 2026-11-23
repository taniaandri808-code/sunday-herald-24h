import os
import shutil

script_dir = os.path.dirname(os.path.abspath(__file__))
src = os.path.join(script_dir, 'entry.png')
dst_dir = os.getenv('MAKEFUN_OUTPUT_DIR', 'output')
os.makedirs(dst_dir, exist_ok=True)
dst = os.path.join(dst_dir, 'entry.png')

shutil.copy2(src, dst)
print(dst)
