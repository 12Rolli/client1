//////REQUETE POUR OBTENIR LE TOKEN
// $.ajax({
//   type: 'POST',
//   url: 'https://dev-pc4dt6moi85ylvu1.au.auth0.com/oauth/token',
//   contentType: 'application/json',
//   data: JSON.stringify({
//     client_id: 'AP9P7tpFsVcUFYA18YulbCUMoVaNZrzS',
//     audience: 'https://e-wedding/api',
//     grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
//     username: 'rdjomkam@yahoo.fr',
//     password: '@Ugie3chu2010',
//     realm: 'Username-Password-Authentication',
//   }),
//   success: function (data) {
//     // Traitez les données de réponse ici, par exemple en stockant le jeton d'accès dans une variable
//     var access_token = data.access_token
//     // alert(access_token)
//     console.log(access_token)
//     // swal(access_token, "success");
//   },
//   error: function (jqXHR, textStatus, errorThrown) {
//     // Traitez l'erreur ici
//     console.log(textStatus, errorThrown)
//   },
// })

//////Requete effectuer pour valider le code otp
// $(document).ready(function () {
//   // Lorsque le bouton "Valider" est cliqué
//   $('#confirms').click(function (event) {
//     let otpCode = $('#otps').val()
//     $.ajax(
//       'https://api.maji-zepa-love.com/api/gift/2aad8174-a836-4b9e-9136-d8ea129672bb/confirmOTP',
//       {
//         type: 'POST',
//         headers: {
//           Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InpWdm9jejNBMXl3NmtOVkRfbElrayJ9.eyJyb2xlIjpbImFkbWluIiwiY29tbWVyY2lhbCJdLCJpc3MiOiJodHRwczovL2Rldi1wYzRkdDZtb2k4NXlsdnUxLmF1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MzdhYTdlZDIyNmE2M2U3NWQ0NDI1YmQiLCJhdWQiOiJodHRwczovL2Utd2VkZGluZy9hcGkiLCJpYXQiOjE2NzM0MjU0NDksImV4cCI6MTY3MzUxMTg0OSwiYXpwIjoiQVA5UDd0cEZzVmNVRllBMThZdWxiQ1VNb1ZhTlpyelMiLCJndHkiOiJwYXNzd29yZCIsInBlcm1pc3Npb25zIjpbIndyaXRlOmdpZnQiLCJ3cml0ZTppbWFnZSJdfQ.ZLqBRz6Mu2wC3cumctH6HyCQQ_K8c8u1awM82pdd8BjR5m41pinfK5S91jr9SDYd8ZX0eZdHxEkI2rF1bJNXj4GnNEERQ9TEJZeMjSpWmAYnZr9llU5LBKu_6HTwvW9kMYxBSmxHLj78Ll3CKMBL_946ZDZtsW2c5pPzon2H-zLx7IA1IoMYF2BPfGEoGaMDgl0xKkb8zAChKQJZT3isesQkg63fBiwq8SVvyDbPbhylX6FI_IGUMrWH5yzOQkKCYk8kYC9nVmCZ8NehWZkiKCWchd6GUOQeKvJId1a96jOhB-k3-ygP38v-fJ6zmoPkXhmk5s4fI5r11Mvwx5Kxeg',
//         },
//         contentType: 'application/json',
//         data: JSON.stringify({
//           otp: otpCode,
//         }),
//         success: function (data, status, xhr) {
//           console.log(data)
//           console.log(status)
//           swal("Good job!", data, "success");
//           // swal("Good job!", status, "success");
//         },
//         error: function (data, status, errorMessage) {
//           swal("Fail job!", errorMessage, "error");
//           console.log(errorMessage)
//         },
//       },
//     )
//   })
// })
function submitForm() {
  // Récupération de la valeur de l'input
  var otp = document.getElementById("otps").value;
  // Préparation de la requête
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 
  "https://api.maji-zepa-love.com/api/gift/70da35d1-fea8-464e-a781-c33900fd6e79/confirmOTP",
   true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // Envoi de la requête avec les données du formulaire
  xhr.send("number=" + otp);
  // Gestion de la réponse
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Traitement de la réponse
      var response = JSON.parse(xhr.responseText);
      console.log(response);
    }
  }
}
// ////Envoi de la requête Ajax pour enregistrer l'email de celui qui veut reserver
$(document).ready(function () {
  // Lorsque le bouton "Achetez Le Produit" est cliqué
  $('#submits').click(function (event) {
    let names = $('#nompers').val()
    let emails = $('#emailpers').val()
    let tel = $('#numpers').val()
    let message = $('#notepers').val()
    $.ajax(
      'https://api.maji-zepa-love.com/api/gift/70da35d1-fea8-464e-a781-c33900fd6e79/reserve',
      {
        type: 'POST',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InpWdm9jejNBMXl3NmtOVkRfbElrayJ9.eyJyb2xlIjpbImFkbWluIiwiY29tbWVyY2lhbCJdLCJpc3MiOiJodHRwczovL2Rldi1wYzRkdDZtb2k4NXlsdnUxLmF1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MzdhYTdlZDIyNmE2M2U3NWQ0NDI1YmQiLCJhdWQiOiJodHRwczovL2Utd2VkZGluZy9hcGkiLCJpYXQiOjE2NzM0MjU0NDksImV4cCI6MTY3MzUxMTg0OSwiYXpwIjoiQVA5UDd0cEZzVmNVRllBMThZdWxiQ1VNb1ZhTlpyelMiLCJndHkiOiJwYXNzd29yZCIsInBlcm1pc3Npb25zIjpbIndyaXRlOmdpZnQiLCJ3cml0ZTppbWFnZSJdfQ.ZLqBRz6Mu2wC3cumctH6HyCQQ_K8c8u1awM82pdd8BjR5m41pinfK5S91jr9SDYd8ZX0eZdHxEkI2rF1bJNXj4GnNEERQ9TEJZeMjSpWmAYnZr9llU5LBKu_6HTwvW9kMYxBSmxHLj78Ll3CKMBL_946ZDZtsW2c5pPzon2H-zLx7IA1IoMYF2BPfGEoGaMDgl0xKkb8zAChKQJZT3isesQkg63fBiwq8SVvyDbPbhylX6FI_IGUMrWH5yzOQkKCYk8kYC9nVmCZ8NehWZkiKCWchd6GUOQeKvJId1a96jOhB-k3-ygP38v-fJ6zmoPkXhmk5s4fI5r11Mvwx5Kxeg',
        },
        contentType: 'application/json',
        data: JSON.stringify({
          giftId: '70da35d1-fea8-464e-a781-c33900fd6e79',
          name: names,
          email: emails,
          phone: tel,
          note: message,
        }),
        success: function (data, status, xhr) {
          console.log(data)
          console.log(status)
          // swal("Good job!","","success");
        },
        error: function (data, status, errorMessage) {
          // swal("Fail job!","","error");
          console.log(status)
          console.log(errorMessage)
        },
      },
    )
  })
})

let addGiftBtn = document.getElementById('addgift')
console.log(addGiftBtn)

$('#addgift').click(function () {
  let name = document.getElementById('namegift').value
  let shoplink = document.getElementById('linkgift').value
  let price = document.getElementById('pricegift').value
  let description = document.getElementById('descriptiongift').value
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
      console.log(data)
      console.log(status)
    },
    error: function (jqXhr, textStatus, errorMessage) {
      console.log(errorMessage)
    },
  })
})
