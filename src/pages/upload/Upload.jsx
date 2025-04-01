function Upload() {
  const handleUpload = () => {
    alert("Upload thành công!");
    // Gọi API upload ở đây
  };

  return (
    <div className="upload-form">
      <h2>Upload dữ liệu AR</h2>
      <input type="file" />
      <br />
      <button onClick={handleUpload}>Tải lên</button>
    </div>
  );
}

export default Upload;
