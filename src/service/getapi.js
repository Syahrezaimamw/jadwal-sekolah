export const getMealsApi=async(value,callback)=>{
    fetch('https://themealdb.com/api/json/v1/1/search.php?s='+value)
            .then(res => res.json())
            .then(a => {
                if (a.meals != null) {
                    callback(a.meals,false)
                } else {
                    callback([],true)
                }
            }).catch((err)=>{
                console.log(err)

            })
}