import axios from "axios";

const options = {
  method: "POST",
  url: "https://online-code-compiler.p.rapidapi.com/v1/",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "c6951eacb2msh1e2138478e188edp1288fejsn62895d1b4678",
    "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
  },
  data: {
    language: "python3",
    version: "latest",
    code: 'print("Hello, World!");',
    input: null,
  },
};

const af = async () => {
  const response = await axios.request(options);
  console.log(response.data);
};

af();
