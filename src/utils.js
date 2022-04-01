const [apiData, setapiData] = useState("")
const apiUrl = "https://skillsforcare-api.herokuapp.com"   

useEffect(() => {
  axios.get(`${apiUrl}/api/notes`)
  .then(response_from_api => {
    console.log(response_from_api)
    // apiData = response_from_api.data[0].title
    setapiData(response_from_api.data[2].title)
    
    
    
  })
  .catch(err => {
    console.log(err)
  })
}, []);  


  const [name, setName] = useState("Joe");

  const handleSubmit = (event) => {
    event.preventDefault();
   axios.post(`${apiUrl}/api/notes`, {
    title: name,
    content: "it worked"
   })
   .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }