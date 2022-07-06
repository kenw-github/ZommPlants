<template>
  <div>
    <NavBar />
    <div style="display:flex; align-items:center; justify-content:center; flex-direction:column; width:100%; height:750px;">
      <h1 style="margin:0; font-size:36px;">Palindrome</h1>
      <form @submit.prevent="">
        <span  style="text-align:center; padding:12px;">
          <label for="palindrome" style=" margin:12px 20px;"><b>Text</b></label>
          <input type="text" placeholder="Enter Palindrome" name="palindrome" required @input="palindromeCount()" style="padding:6px 16px; border-radius:10px;" v-model="palindrome"></input>
        </span>
      </form>
        <p>
          Total detected palindrome : {{ palinDromeCountt }} <br>
          Palindrome words : <template v-for="v in palinDromeWords">{{v}}, </template> <br>
          Palindrome index : <template v-for="v in palinDromeIndex">{{v}}, </template> <br>
          Invalid palindrome index : 1,3,4
        </p>
    </div>
    <div style="display:flex; align-items:center; justify-content:center; flex-direction:column; width:100%; height:750px;">
      <h1 style="margin:0; font-size:36px;">Triangle</h1>
      <form @submit.prevent="">
        <span  style="text-align:center; padding:12px;">
          <label for="palindrome" style=" margin:12px 20px;"><b>Text</b></label>
          <input type="number" placeholder="Enter Triagle Height" name="triangleHeight" required style="padding:6px 16px; border-radius:10px;" v-model="triangleInput"></input>
        </span>
      </form>
        <p>
          <template v-for="(v, index) in loopTriangle">
            <template v-for="(w, indexx) in loopTriangle">
              <template v-if="indexx == 0 || indexx == index || index == triangleInput-1">
                *
              </template>
              <template v-else="a">
                &nbsp;
              </template>
            </template>
            <br/>
          </template>
        </p>
    </div>
    <div style="display:flex; align-items:center; justify-content:center; flex-direction:column; width:100%; height:750px;">
      <h1 style="margin:0; font-size:36px;">JSON</h1>
        <p>
          {
            'address.street':'jalan sakura',
            'address.provice':'banten',
            'address.city:’tangerang',
            'person.name':'john',
            'person.email':'john@doe.com',
            'userType':'admin',
            'accessLevel':'QA'
          }
        </p>
        <p>
          Test
        </p>
    </div>
    <Footer />
  </div>
  
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      palindrome: "",
      palinDromeCountt: 0,
      palinDromeWords: [],
      palinDromeIndex: [],
      invalidPalinDromeIndex: [],
      triangleInput: 0,
    }
  },
  mounted() {
    this.google();
  },
  methods: {
		palindromeCount() {
      let arryWords = this.palindrome.split(" ");
      this.palinDromeCountt = 0;
      this.palinDromeWords = [];
      this.palinDromeIndex = [];
      this.invalidPalinDromeIndex = [];
      if(this.palindrome){
        for (let i = 0; i < arryWords.length; i++) {
          let reverseWord = arryWords[i].split("").reverse().join("");
          if(arryWords[i] == reverseWord){
            this.palinDromeCountt++;
            this.palinDromeWords.push(arryWords[i]);
            this.palinDromeIndex.push(i);
          } else {
            this.invalidPalinDromeIndex.push(i);
          }
        }
      }
      //loop untuk memilih panjang kata
      // for (let i = 2; i < this.palindrome.length; i++) {
      //   //loop untuk katanya
      //   for (let j = 0; j < this.palindrome.length; j++) {
      //     if(j+i <= this.palindrome.length){
      //       let kataYgPerluDiCek = this.palindrome.substring(j, j+i);
      //       let maxKata = kataYgPerluDiCek.length - 1;
      //       let minKata = 0;
      //       let polinDrome = true;

      //       while(minKata >= 0 && maxKata < kataYgPerluDiCek.length){
      //         if(kataYgPerluDiCek[minKata] != kataYgPerluDiCek[maxKata]){
      //           polinDrome = false;
      //           break;
      //         }
      //         minKata--;
      //         maxKata++;
      //       }

      //       if(polinDrome){
      //         console.log(kataYgPerluDiCek);
      //       }
      //     }
      //   }
      // }
		},
    google(){
      let str = `{'address.street':'jalan sakura',
      'address.provice':'banten',
      'address.city:’tangerang',
      'person.name':'john',
      'person.email':'john@doe.com',
      'userType':'admin',
      'accessLevel':'QA'
      }`;
      str = str.replace(/(\r\n|\n|\r)/gm, "");
      console.log(str);
    },
	},
  computed: {
    loopTriangle(){
      let tmp = [];
      for (let i = 0; i < this.triangleInput; i++) {
        tmp.push({});
      }
      return tmp;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
