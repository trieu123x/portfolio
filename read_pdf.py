import sys
import os

# Fix UTF-8 encoding cho Windows console
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

# Thử dùng pdfplumber trước, nếu không có thì dùng PyMuPDF (fitz)
def read_pdf_pdfplumber(pdf_path):
    import pdfplumber
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for i, page in enumerate(pdf.pages):
            page_text = page.extract_text()
            if page_text:
                text += f"\n--- Trang {i+1} ---\n{page_text}\n"
    return text

def read_pdf_fitz(pdf_path):
    import fitz  # PyMuPDF
    text = ""
    doc = fitz.open(pdf_path)
    for i, page in enumerate(doc):
        page_text = page.get_text()
        if page_text.strip():
            text += f"\n--- Trang {i+1} ---\n{page_text}\n"
    doc.close()
    return text

def read_pdf(pdf_path):
    print(f"\n{'='*60}")
    print(f"[PDF] File: {os.path.basename(pdf_path)}")
    print(f"{'='*60}")
    
    # Thử pdfplumber
    try:
        text = read_pdf_pdfplumber(pdf_path)
        if text.strip():
            print(text)
            return text
        else:
            print("[pdfplumber] Không tìm thấy text, thử PyMuPDF...")
    except ImportError:
        print("[pdfplumber] Chưa cài, thử PyMuPDF...")
    except Exception as e:
        print(f"[pdfplumber] Lỗi: {e}, thử PyMuPDF...")

    # Thử PyMuPDF (fitz)
    try:
        text = read_pdf_fitz(pdf_path)
        if text.strip():
            print(text)
            return text
        else:
            print("[PyMuPDF] Không tìm thấy text trong file.")
    except ImportError:
        print("[PyMuPDF] Chưa cài. Chạy: pip install pymupdf")
    except Exception as e:
        print(f"[PyMuPDF] Lỗi: {e}")

    return ""

if __name__ == "__main__":
    base_dir = r"c:\Users\admin\Downloads\code_web\portfolio"
    
    pdf_files = [
        os.path.join(base_dir, "Portfolio (Community).pdf"),
        os.path.join(base_dir, "[PTIT] CV Intern AI - Đinh Hải Triều (1).pdf"),
    ]

    all_text = {}
    for pdf_path in pdf_files:
        if os.path.exists(pdf_path):
            text = read_pdf(pdf_path)
            all_text[os.path.basename(pdf_path)] = text
        else:
            print(f"[ERROR] Khong tim thay file: {pdf_path}")

    print("\n" + "="*60)
    print("[DONE] Hoan tat doc PDF!")
    print("="*60)
