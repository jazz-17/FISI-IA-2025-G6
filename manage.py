import shutil
import os
from pathlib import Path


def move_contents_to_parent_overwrite(src_dir_name="dist", dest_parent_dir="./"):
    """
    Moves contents of a source directory into its parent directory,
    OVERWRITING any existing files or directories in the parent with
    the same name.

    Args:
        src_dir_name (str): The name of the source directory (relative to CWD).
        dest_parent_dir (str): The relative path to the destination parent directory.
                               Defaults to '..'.
    """
    # Get the Current Working Directory (where the script is run from)
    # Assumes 'dist' is a subdirectory of the CWD
    cwd = Path.cwd()
    src_path = (cwd / src_dir_name).resolve()
    dest_path = (cwd / dest_parent_dir).resolve()

    print(f"Attempting to move contents from: {src_path}")
    print(f"To destination directory:        {dest_path}")
    print(
        "!!! WARNING: This script WILL OVERWRITE existing files/folders in the destination !!!"
    )

    # --- Basic Validations ---
    if not src_path.is_dir():
        print(
            f"\nError: Source directory '{src_path}' does not exist or is not a directory."
        )
        print("Please ensure the script is run from the directory containing 'dist'.")
        return False

    if src_path == dest_path:
        print("\nError: Source and destination directories are the same. Cannot move.")
        return False

    # Ensure dest_path is a directory
    if not dest_path.is_dir():
        print(
            f"\nError: Calculated destination directory '{dest_path}' is not a valid directory."
        )
        return False

    # --- Iterate and Move Items ---
    print(f"\nMoving items from '{src_path.name}' to '{dest_path.name}' (parent)...")
    moved_count = 0
    overwritten_count = 0
    error_count = 0

    # Important: Iterate over a list copy because removing items
    # while iterating over the original directory contents can be problematic.
    items_to_move = list(src_path.iterdir())

    for item_path in items_to_move:
        # Construct the full destination path for the item
        destination_item_path = dest_path / item_path.name
        is_overwrite = False

        # --- OVERWRITE LOGIC ---
        if destination_item_path.exists():
            is_overwrite = True
            print(
                f"  [!] '{item_path.name}' exists in destination. Attempting to remove before move..."
            )
            try:
                if destination_item_path.is_dir():
                    shutil.rmtree(destination_item_path)  # Recursively remove directory
                    print(
                        f"      Removed existing directory: '{destination_item_path}'"
                    )
                else:
                    destination_item_path.unlink()  # Remove file or symlink
                    print(f"      Removed existing file: '{destination_item_path}'")
            except OSError as e:
                print(
                    f"  [ERROR] Could not remove existing '{destination_item_path.name}': {e}"
                )
                print("         Skipping move for this item.")
                error_count += 1
                continue  # Skip to the next item if removal failed

        # --- Attempt the move ---
        try:
            action = "Overwriting with" if is_overwrite else "Moving"
            print(f"  {action} '{item_path.name}'...")
            shutil.move(str(item_path), str(destination_item_path))
            moved_count += 1
            if is_overwrite:
                overwritten_count += 1
        except (shutil.Error, OSError) as e:
            print(f"  [ERROR] moving '{item_path.name}': {e}")
            error_count += 1
        except Exception as e:
            print(f"  [UNEXPECTED ERROR] moving '{item_path.name}': {e}")
            error_count += 1

    # --- Summary ---
    print("\n--- Move Summary ---")
    print(f"Successfully moved/overwritten: {moved_count} item(s)")
    print(f"Specifically overwritten:       {overwritten_count} item(s)")
    print(f"Errors encountered:             {error_count} item(s)")

    # --- Optional: Remove empty source directory ---
    # Only remove if no errors occurred during the process
    if error_count == 0 and moved_count > 0:
        try:
            # Check if empty after moving/overwriting everything
            if not any(src_path.iterdir()):
                print(f"\nSource directory '{src_path}' appears empty. Removing...")
                src_path.rmdir()  # This will fail if not empty
                print(f"Successfully removed '{src_path}'.")
            else:
                # This might happen if hidden files remain or if iterdir() had issues
                print(f"\nSource directory '{src_path}' not empty, not removing.")
        except OSError as e:
            print(f"\nWarning: Could not remove source directory '{src_path}': {e}")
    elif error_count > 0:
        print(
            f"\nSource directory '{src_path}' not removed due to errors during the move process."
        )
    else:
        print(
            f"\nSource directory '{src_path}' not removed (nothing needed moving or it was initially empty)."
        )

    return error_count == 0  # Return True if successful (no errors), False otherwise


# --- How to Use ---
if __name__ == "__main__":
    # 1. Save this script (e.g., move_overwrite.py) in the directory
    #    that CONTAINS your 'dist' folder.
    #    Example structure:
    #    your_project/
    #    ├── dist/
    #    │   ├── file1.txt
    #    │   └── subfolder/
    #    │       └── file2.js
    #    ├── file1.txt      <-- This will be overwritten
    #    └── move_overwrite.py  <-- Run this script from here

    # 2. Run from the terminal in that directory:
    #    python move_overwrite.py

    print("--- Starting Move Script (Overwrite Mode) ---")
    success = move_contents_to_parent_overwrite(
        src_dir_name="dist", dest_parent_dir="."
    )

    if success:
        print("\n--- Script finished successfully ---")
    else:
        print("\n--- Script finished with errors ---")
