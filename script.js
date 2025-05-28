fetch("https://ipapi.co/json/")
  .then(res => res.json())
  .then(data => {
    const ip = data.ip;
    const city = data.city;
    const region = data.region;
    const country = data.country_name;
    document.getElementById("ip").innerText = `IP: ${ip}`;
    document.getElementById("location").innerText = `Location: ${city}, ${region}, ${country}`;
  })
  .catch(err => {
    document.getElementById("ip").innerText = "Unable to fetch IP";
    document.getElementById("location").innerText = "";
  });
