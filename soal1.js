const cekHariKerja = (day) => {
  return new Promise((resolve, reject)=> {
    setTimeout(()=>{
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
      let cek = dataDay.find((item)=>{
        return item === day
      })
      if(cek){
        resolve(cek)
      } else {
        reject(new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}

cekHariKerja('senin')
    .then((result) => {
      console.log(`Hari ${result} adalah hari kerja`)
    })
    .catch((error) => {
      console.error(error)
    })

async function handleAsyncTask(){
  try{
    console.log("Pending..")
    const result = await cekHariKerja('minggu')
    if(!result){
      throw Error('Result not found')
    }
    console.log("Success")
    console.log(`Hari ${result} adalah hari kerja`)
  } catch(error) {
    console.error('Error')
    if(error.message){
      console.log(error.message)
    } else {
      console.log(error)
    }
  } finally {
    console.log("Finish")
  }
}

handleAsyncTask()

/* Penjelasan 
1. Penggunaan Then-Catch untuk menampilkan hasil dari fungsi cekHariKerja('senin'), 
bila memiliki hasil maka akan menampilkan result dan bila terdapat error maka akan
menampilkan error di terminal

2. Penggunaan Try-Catch ini untuk mencoba menjalankan fungsi cekHariKerja('minggu'),
bila berhasil akan menampilkan result, bila gagal maka akan menampilkan pesan error.
Lalu finally akan selalu dijalankan walaupun itu berhasil atau gagal. 
*/