// بيانات الشموع أو البيانات التي ستستخدمها لرسم الشارت
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // يمكن تغييرها لتكون تواريخ حقيقية
    datasets: [{
        label: 'Sample Data',
        data: [12, 19, 3, 5, 2, 3], // يمكنك تعديل البيانات حسب حاجتك
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1
    }]
};

// إعدادات الشارت
const config = {
    type: 'line', // يمكن أن يكون 'bar' أو 'pie' حسب الحاجة
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            x: {
                ticks: {
                    maxRotation: 90,
                    minRotation: 45
                }
            }
        }
    }
};

// رسم الشارت باستخدام مكتبة Chart.js
const chart = new Chart(
    document.getElementById('chart'),
    config
);
