//Program nilai diatas kkm
console.log("1. Program nilai diatas kkm")
const hasilNilai = (kkm) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataNilai = [50, 90, 20, 76, 85, 60, 50, 40, 45, 20, 70, 46]
      let listNilai = dataNilai.filter((num)=>{
        return num >= kkm
      })
      if(listNilai.length == 0) {
        reject('Tidak ada nilai diatas KKM')
      } else {
        resolve(listNilai)
      }
    }, 1000)
  })
}

async function handleAsyncTask(){
  try{
    console.log("Pending..")
    const result = await hasilNilai(55)
    if(!result){
      throw Error('Result not found')
    }
    console.log("Success")
    console.log(`Berikut nilai diatas KKM : ${result}`)

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

// //Program Mencari Nama
// console.log("2. Program Mencari Nama")
// const searchName = (pattern, limit) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const names = [
//         "Abigail", "Alexandra", "Alison",
//         "Amanda", "Angela", "Bella",
//         "Carol", "Caroline", "Carolyn",
//         "Deirdre", "Diana", "Elizabeth",
//         "Ella", "Faith", "Olivia", "Penelope"
//       ]
//       const nameList = names.filter(item => 
//         item.toLowerCase()
//         .includes(pattern.toLowerCase()))
//         .slice(0, limit)

//       if(nameList.length == 0) {
//         reject('Data Tidak Ditemukan')
//       } else {
//         resolve(`2. Berikut adalah data yang ditemukan : ${nameList}`)
//       }
//     }, 1000)
//   })
// };

// searchName("an", 3)
//     .then((result) => {
//       console.log(result)
//     })
//     .catch((error) => {
//       console.error(error)
//     })