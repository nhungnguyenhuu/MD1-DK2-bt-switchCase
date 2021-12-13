function nhapSoThang() {
      let  a= parseInt(document.getElementById('thang').value);
      switch (a) {
         case(1):
         case(3):
         case (5):
         case(7):
         case(8):
         case(10):
         case(12):
            document.getElementById('kq').innerHTML=('Số ngày trong tháng là 31 ngày')
         case(4):
         case(6):
         case(9):
         case(11):
            document.getElementById('kq').innerHTML= ('Số ngày trong tháng là 30 ngày')
         case(2):
            document.getElementById('kq').innerHTML=('Số ngày trong tháng là 28 ngày năm nhuận là 29 ngày')
      }



}
