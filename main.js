const Display = () => {
    // Get the input value and convert to number
    let year = parseInt(document.getElementById("display").value);
    
    // Array of Vietnamese zodiac animals (corrected spelling)
    const congiap = [
        'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'
    ];
    
    // Validate input
    if (isNaN(year) || year < 0) {
        document.getElementById("result").innerHTML = "Năm không hợp lệ";
        return;
    }
    
    // Calculate zodiac index (adjusted for negative modulo)
    const index = ((year - 4) % 12 + 12) % 12;
    
    // Display result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML="Con giáp của bạn là: " + congiap[index];
}