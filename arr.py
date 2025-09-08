# import random
# import json

# def generate_large_array(size=10_000_000, target=13579):
#     arr = [random.randint(1, 1000) for _ in range(size - 2)]
#     num1 = random.randint(1, 60000)
#     num2 = target - num1
#     arr.extend([num1, num2])
#     random.shuffle(arr)
#     return arr

# # Create the large array
# large_array = generate_large_array()
# target_sum = 135790

# # Save the array to a JSON file
# with open('large_array.json', 'w') as f:
#     json.dump(large_array, f)

# print("Array saved to large_array.json")

import random
import json

def generate_large_array(size=10000, target=150):
    """
    Generates a large array with values in a specific range for testing the 2 Sum problem.
    It includes at least one pair that sums to the target.
    """
    # Generate the bulk of the array with values from 1 to 100
    arr = [random.randint(1, 100) for _ in range(size - 2)]

    # Add a guaranteed pair that sums to the target.
    # We choose a num1 that ensures num2 is also within the valid range [1, 100].
    # For target=150, num1 must be in the range [50, 99].
    num1 = random.randint(max(1, target - 100), min(99, target - 1))
    num2 = target - num1

    arr.extend([num1, num2])
    random.shuffle(arr) # Shuffle to place the pair randomly

    return arr, target

# Create the array and target value
large_array, target_sum = generate_large_array()

# Print the size and target for confirmation
print(f"Generated array of size: {len(large_array)}")
print(f"Target sum: {target_sum}")

# Optional: Save the array to a JSON file for use in another language
with open('large_array1000.json', 'w') as f:
    json.dump(large_array, f)
print("Array saved to large_array.json")