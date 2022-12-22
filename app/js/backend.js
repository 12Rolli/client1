let addGiftBtn = document.getElementById('addgift');
console.log(addGiftBtn);

$('#addgift').click(function () {
    let name = document.getElementById('namegift').value;
    let shoplink = document.getElementById('linkgift').value;
    let price = document.getElementById('pricegift').value;
    let description = document.getElementById('descriptiongift').value;
    $.ajax('https://api.maji-zepa-love.com/api/gift', {
        type: 'POST', // http method
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InpWdm9jejNBMXl3NmtOVkRfbElrayJ9.eyJyb2xlIjpbImFkbWluIiwiY29tbWVyY2lhbCJdLCJpc3MiOiJodHRwczovL2Rldi1wYzRkdDZtb2k4NXlsdnUxLmF1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MzdhYTdlZDIyNmE2M2U3NWQ0NDI1YmQiLCJhdWQiOiJodHRwczovL2Utd2VkZGluZy9hcGkiLCJpYXQiOjE2NzE2Mzc4NTEsImV4cCI6MTY3MTcyNDI1MSwiYXpwIjoiQVA5UDd0cEZzVmNVRllBMThZdWxiQ1VNb1ZhTlpyelMiLCJndHkiOiJwYXNzd29yZCIsInBlcm1pc3Npb25zIjpbIndyaXRlOmdpZnQiLCJ3cml0ZTppbWFnZSJdfQ.dzrZmEYHLSSnEmz0NBGHIvE5Ca3o3aBqJDpMNyUpsLHURcuIUSNKy9PnxQ3bBHoeF74Atqs1YG3LU4OiJjak0K3j142bM14FoZsUKUFhmY-trkuRZ3dQgvOysMC4x8hLGnnAcuocZhbFIGZCRUz7dKkfariVqdbQodrxTWhMnS9xVPruv01j3uRvBQdWtjkhhgG6aCiVGyrI5n57O9z3HVb5J27qEvaxdVvI2ZMW1DFAJlpO3R80kUAVag8tnjBRSQ7c3LjS0XuqJ-DliClbr0vU19mg4VVeDsTHYkKPibiD75cQlUsKFhlQAYfVkG8rVhJcPGZ7-R1njV7iPe9Hdg',
        },
        contentType: 'application/json',
        data: JSON.stringify({
            name: name,
            shopLink: shoplink,
            // price: price,
            description: description,
        }),
        success: function (data, status, xhr) {
            console.log(data);
            console.log(status);
        },
        error: function (jqXhr, textStatus, errorMessage) {
            console.log(errorMessage);
        },
    });
});

// let test = $.ajax('https://api.maji-zepa-love.com/api/gift', {
//     success: function (data, status, xhr) {
//         console.log(data);
//     },
// });
// console.log(test);
