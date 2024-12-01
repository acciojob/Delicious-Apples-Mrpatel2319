//your code here
document.addEventListener("DOMContentLoaded", () => {
    const mainPhoto = document.getElementById("main-photo");
    const price = document.getElementById("apple-price");
    const benefits = document.getElementById("apple-benefits");

    const images = {
        green: {
            src: "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
            price: "$7.93",
            benefits: "Green apples are crisp and tangy, full of fiber, and great for digestion!"
        },
        yellow: {
            src: "https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png",
            price: "$8.49",
            benefits: "Yellow apples are sweet and juicy, perfect for snacks and desserts."
        },
        orange: {
            src: "https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png",
            price: "$9.10",
            benefits: "Orange apples are rich in antioxidants and have a unique citrus flavor."
        },
        red: {
            src: "https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png",
            price: "$8.75",
            benefits: "Red apples are sweet and crunchy, great for boosting energy."
        }
    };

    document.querySelectorAll(".photo-album img").forEach(img => {
        img.addEventListener("click", (e) => {
            const color = e.target.dataset.color;
            const apple = images[color];

            mainPhoto.src = apple.src;
            price.textContent = apple.price;
            benefits.textContent = apple.benefits;
        });
    });
});
