a = true
if (a){
    console.log(a)
}

const info = {
    name: "조현준",
    age: 21,
    address: 'bangwha',
    getPoint: function() {
        return 100
    }
}
const cho_info = info
cho_info.name = '한채린'
console.log(cho_info.name)

function cat(){
    this.name = 'kitty'
    this.address = '오목교'
}

const lyn_cat = new cat()
console.log(lyn_cat.name)

