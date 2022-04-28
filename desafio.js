const axios = require('axios')

async function consulta (){
    const json = await axios('https://www.sii.cl/servicios_online/1047-nomina_inst_financieras-1714.html')
    console.log(json.data)
}

consulta()