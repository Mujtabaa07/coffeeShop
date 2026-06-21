
# OpenCV Order Receipt Scanner for coffeeShop Project

This document provides a complete guide and a self-contained Python script to capture and process order receipts from a customer's device using a webcam, OpenCV, and QR codes.

---

### 1. Overview

The system works by:
1.  Capturing live video from a webcam.
2.  Detecting and decoding QR codes presented to the camera.
3.  Extracting an `orderId` from the QR code.
4.  Making an API call to your existing `coffeeShop` backend to fetch order details and confirm the order.

---

### 2. Prerequisites & Dependencies

Before running the script, you need to install the necessary Python libraries. You can do this using `pip`:

```bash
pip install opencv-python pyzbar requests
```
-   **opencv-python**: For capturing and processing video from the webcam.
-   **pyzbar**: For detecting and decoding QR codes.
-   **requests**: For making HTTP requests to your backend API.

---

### 3. Full Python Script: `order_receipt_scanner.py`

Below is the complete, runnable Python script. Save it as `order_receipt_scanner.py`.

```python
import cv2
from pyzbar import pyzbar
import requests
import json
import time

# ====== CONFIG (change to match your coffeeShop backend) ======
# Make sure your Node.js/Express backend is running and accessible at this URL
BACKEND_BASE_URL = "http://localhost:5000"  # Your backend URL. It might be localhost:3000, etc.
ORDER_LOOKUP_ENDPOINT = "/api/orders"       # e.g., GET /api/orders/<order_id>
ORDER_CONFIRM_ENDPOINT = "/api/orders/confirm"  # e.g., POST /api/orders/confirm
# =============================================================


def decode_qr_codes(frame):
    """
    Reads QR codes from a camera frame and returns a list of decoded strings.
    It also draws a bounding box and the decoded text on the frame.
    """
    barcodes = pyzbar.decode(frame)
    decoded_data = []

    for barcode in barcodes:
        barcode_data = barcode.data.decode("utf-8")
        decoded_data.append(barcode_data)

        # Draw a green rectangle around the detected QR code
        (x, y, w, h) = barcode.rect
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

        # Put the decoded text above the rectangle for visibility
        cv2.putText(frame, barcode_data, (x, y - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

    return decoded_data, frame


def get_order_details(order_id):
    """
    Fetches order details from the coffeeShop backend API.
    """
    try:
        url = f"{BACKEND_BASE_URL}{ORDER_LOOKUP_ENDPOINT}/{order_id}"
        print(f"[API] Sending GET request to: {url}")
        resp = requests.get(url, timeout=5)
        if resp.status_code == 200:
            return resp.json()
        else:
            print(f"[API FAIL] Failed to get order (Status: {resp.status_code}): {resp.text}")
            return None
    except requests.exceptions.RequestException as e:
        print(f"[API ERROR] Could not connect to backend to fetch order: {e}")
        return None


def confirm_order(order_id):
    """
    Sends a confirmation to the backend to mark the order as served/completed.
    """
    try:
        url = f"{BACKEND_BASE_URL}{ORDER_CONFIRM_ENDPOINT}"
        payload = {"orderId": order_id}  # Change this key to match your API's expected body
        print(f"[API] Sending POST request to: {url} with payload: {payload}")
        resp = requests.post(url, json=payload, timeout=5)
        if resp.status_code == 200:
            print(f"[API OK] Order {order_id} confirmed successfully.")
            return True
        else:
            print(f"[API FAIL] Failed to confirm order (Status: {resp.status_code}): {resp.text}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"[API ERROR] Could not connect to backend to confirm order: {e}")
        return False


def main():
    """
    Main function to run the webcam scanner.
    """
    cap = cv2.VideoCapture(0)  # Use 0 for the default webcam

    if not cap.isOpened():
        print("Error: Could not open webcam.")
        return

    print("Scanner started. Show a QR code to the camera. Press 'q' to quit.")

    last_scanned_value = None
    last_scan_time = 0
    COOLDOWN_SECONDS = 5  # Cooldown to prevent re-scanning the same QR code immediately

    while True:
        # Capture frame-by-frame
        ret, frame = cap.read()
        if not ret:
            print("Failed to grab frame from webcam. Exiting.")
            break

        # Decode any QR codes in the current frame
        decoded_list, annotated_frame = decode_qr_codes(frame)

        # Process the first QR code found
        if decoded_list:
            decoded_text = decoded_list[0]

            now = time.time()
            # Check if this is a new QR code or if the cooldown has passed
            if decoded_text != last_scanned_value or (now - last_scan_time) > COOLDOWN_SECONDS:
                last_scanned_value = decoded_text
                last_scan_time = now

                print(f"\n[SCAN] Decoded QR: {decoded_text}")

                # Logic to extract order ID. Assumes QR contains a simple string or JSON.
                order_id = None
                try:
                    # Case 1: QR contains JSON like { "orderId": "ORD123" }
                    data = json.loads(decoded_text)
                    order_id = data.get("orderId")
                except (json.JSONDecodeError, TypeError):
                    # Case 2: QR contains a simple string like "ORD123"
                    order_id = decoded_text

                if order_id:
                    print(f"[INFO] Extracted Order ID: {order_id}")
                    details = get_order_details(order_id)
                    
                    if details:
                        print("[ORDER DETAILS]", json.dumps(details, indent=2))
                        
                        # Automatically confirm the order for this demo
                        if confirm_order(order_id):
                            cv2.putText(annotated_frame, f"Order {order_id} Confirmed",
                                        (50, 50), cv2.FONT_HERSHEY_SIMPLEX,
                                        1.0, (0, 255, 0), 3)
                    else:
                        cv2.putText(annotated_frame, "ORDER NOT FOUND",
                                    (50, 50), cv2.FONT_HERSHEY_SIMPLEX,
                                    1.0, (0, 0, 255), 3)

        # Display the resulting frame
        cv2.imshow("Coffee Shop Order Receipt Scanner", annotated_frame)

        # Exit the loop when 'q' is pressed
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

    # When everything is done, release the capture and destroy windows
    cap.release()
    cv2.destroyAllWindows()
    print("Scanner stopped.")


if __name__ == "__main__":
    main()

```

---

### 4. How to Integrate and Run

1.  **Configure API Endpoints**:
    Open the `order_receipt_scanner.py` script and modify the configuration variables at the top to match your `coffeeShop` backend.

    ```python
    # Ensure this URL matches where your backend is running
    BACKEND_BASE_URL = "http://localhost:5000"
    
    # Ensure these endpoints match your Express routes
    ORDER_LOOKUP_ENDPOINT = "/api/orders"
    ORDER_CONFIRM_ENDPOINT = "/api/orders/confirm"
    ```

2.  **Define QR Code Content**:
    Decide what information your QR code will hold. When a user places an order in your app, you will generate a QR code for their receipt.
    -   **Simple method**: The QR code just contains the order ID string (e.g., `"67c78d5e-3c0f-45a1-9d93-3e819b7b4da7"`).
    -   **Recommended method**: The QR code contains a JSON object. This is more flexible for future use.
        ```json
        {"orderId": "67c78d5e-3c0f-45a1-9d93-3e819b7b4da7"}
        ```

3.  **Start Your Backend**:
    Make sure your `coffeeShop` Node.js/Express server is running.

4.  **Run the Scanner**:
    Execute the Python script from your terminal:
    ```bash
    python order_receipt_scanner.py
    ```
    A window titled "Coffee Shop Order Receipt Scanner" should appear, showing your webcam feed.

5.  **Test**:
    Use an online QR code generator to create a test QR code with an existing `orderId` from your database. Show the QR code to the webcam. The script will print the API calls and order details to the console.
