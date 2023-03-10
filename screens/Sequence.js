import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";

const ConicSection = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.row}>
          <SafeAreaView style={styles.header}>
            <Text style={styles.header}>ความรู้เบื้องต้นเกี่ยวกับลำดับ</Text>
          </SafeAreaView>
          <Text style={styles.text}>
            บทนิยาม คือ
            ฟังก์ชันที่มีโดเมนเป็นเซตของจำนวนเต็มบวกที่เรียงจากน้อยไปมากโดยเริ่มตั้งแต่
            1 เรียกว่า “ลำดับ”{"\n"}
            ถ้าฟังก์ชันเป็นลำดับที่มีโดเมนเป็น {"{"} 1, 2, 3, …, n {"}"}{" "}
            เรียกว่า “ลำดับจำกัด”{"\n"}
            และถ้าฟังก์ชันเป็นลำดับที่มีโดเมนเป็น {"{"} 1, 2, 3, … {"}"}{" "}
            เรียกว่า “ลำดับอนันต์”{"\n"}
            {"\n"}
            ความหมายของลำดับในการเขียนลำดับ จะเขียนเฉพาะสมาชิกของเรนจ์เรียงกันไป
            {"\n"}กล่าวคือ ถ้า a เป็น ลำดับจำกัด จะเขียนแทนด้วย a1, a2, a3, …,
            an{"\n"}
            และถ้า a เป็น ลำดับอนันต์ จะเขียนแทนด้วย a1, a2, a3, …, an, …{"\n"}
            เรียก a1 ว่า พจน์ที่ 1 ของลำดับ{"\n"}
            เรียก a2 ว่า พจน์ที่ 2 ของลำดับ{"\n"}
            เรียก a3 ว่า พจน์ที่ 3 ของลำดับ{"\n"}
            และเรียก an ว่า พจน์ที่ n ของลำดับ หรือพจน์ทั่วไปของลำดับ{"\n"}
            {"\n"}
            ตัวอย่างของการเขียนลำดับ{"\n"}– ตัวอย่างที่ 1 : 4, 7, 10, 13
            เป็นลำดับจำกัดที่มี a1 = 4, a2 = 7, a3 = 10, a4 = 13 และ an = 3n + 1
            {"\n"}– ตัวอย่างที่ 2 : – 2, 1, 6, 13, … เป็นลำดับอนันต์ที่มี a1 = –
            2, a2 = 1, a3 = 6, a4 = 13 และ an = n2 – 3{"\n"}
            {"\n"}
            นอกจากการเขียนลำดับนอกจากจะเขียนโดยการแจงพจน์แล้ว
            อาจจะเขียนเฉพาะพจน์ที่ n หรือพจน์ทั่วไป
            พร้อมทั้งระบุสมาชิกในโดเมนด้วย{"\n"}
            {"\n"}
            ตัวอย่างการเขียน{"\n"}– ตัวอย่างที่ 1 : ลำดับ 4, 7, 10, 13
            อาจเขียนแทนด้วย an = 3n + 1 เมื่อ n {"{"} 1, 2, 3, 4 {"}"}
            {"\n"}– ตัวอย่างที่ 2 : – 2 , 1, 6, 13, … อาจเขียนแทนด้วย an = n2 –
            3 เมื่อ n เป็นจำนวนเต็มบวก{"\n"}
            {"\n"}
            ทั้งนี้ ในกรณีที่กำหนดลำดับโดยพจน์ที่ n หรือพจน์ทั่วไป
            ถ้าไม่ได้ระบุสมาชิกในโดเมนให้ถือว่าลำดับนั้นเป็น ลำดับอนันต์{"\n"}
            {"\n"}
            ตังอย่างการเขียนลำดับจัด และลำดับอนันต์{"\n"}
            โดยที่ ลำดับจำกัด เป็นลำดับที่มีโดเมนเป็นเซตของจำนวนเต็มบวก n
            ในพจน์แรก และลำดับอนันต์ เป็นลำดับที่มีโดเมนเป็นเซตของจำนวนเต็มบวก
            {"\n"}– ตัวอย่างที่ 1 : 6, 12, 18, 24, 30 เป็นลำดับจำกัด{"\n"}–
            ตัวอย่างที่ 2 : an= 5n – 2 เมื่อ n {"{"} 1, 2, 3, …, 20 {"}"}{" "}
            เป็นลำดับจำกัด{"\n"}– ตัวอย่างที่ 3 : 2, 4, 8, 16, …, an, …
            เป็นลำดับอนันต์{"\n"}– ตัวอย่างที่ 4 : an = n2 +3 เป็นลำดับอนันต์
            {"\n"}
            {"\n"}
            ลำดับเลขคณิต{"\n"}
            ลำดับเลขคณิต เป็นลำดับที่มีผลต่างที่ได้จากการนำพจน์ที่ n+1
            ลบด้วยพจน์ที่ n แล้วมีค่าคงที่เสมอ และเรียกผลต่างที่มีค่าคงที่ว่า
            ผลต่างร่วม (Common difference){"\n"}
            ถ้า a1, a2, a3, …, an, an+1 , … เป็นลำดับเลขคณิตแล้ว จะได้ a2 – a1 =
            a3 – a2 = … = an+1{"\n"}– an เท่ากับค่าคงที่ เรียกค่าคงที่นี้ว่า
            “ผลต่างร่วม” (Common difference) เขียนแทนด้วย “d”{"\n"}
            จากบทนิยาม d = an+1 – an หรือ an+1 = an + d{"\n"}
            {"\n"}
            ลำดับเรขาคณิต{"\n"}
            ลำดับเลขาคณิต เป็นลำดับที่มีอัตราส่วนของพจน์ที่ n+1 ต่อพจน์ที่ n
            เป็นค่าคงที่ ทุกค่าของจำนวนนับ n และเรียกค่าคงที่นี้ว่า
            “อัตราส่วนร่วม” (Common ratio){"\n"}
            ถ้า a1, a2, a3, …, an, an+1 เป็นลำดับเรขาคณิตแล้ว
            จะได้เท่ากับค่าคงที่ เรียกค่าคงที่นี้ว่า “อัตราส่วนร่วม” (Common
            ratio) เขียนแทนด้วย “r”{"\n"}
            ** นอกจากจะมีลำดับเลขคณิต และลำดับเลขาคณิตแล้วนั้น ก็ยังมีลำดับอื่น
            ๆ ที่น่าสนใจีอีกด้วย ได้แก่{"\n"}
            {"\n"}
            ลำดับหลายชั้น{"\n"}
            ลำดับหลายชั้น เป็นลำดับเลขอนุกรม
            มีค่าความแตกต่างระหว่างตัวเลขมีลักษณะเป็นเลขอนุกรมด้วย{"\n"}
            ตัวอย่างการเขียนลำดับหลายชั้น
          </Text>
          <Image
            style={{
              width: 400,
              height: 350,
              alignSelf: "center",
            }}
            source={require("../assets/Ex4.png")}
          />
          <Text style={styles.text}>
            ลำดับเว้นระยะ{"\n"}
            ลำดับเว้นระยะ เป็นลำดับเลขอนุกรม ซึ่งประกอบด้วยอนุกรมมากกว่า 1
            ซ้อนกันอยู่ภายในโจทย์เดียวกัน{"\n"}
            ตัวอย่างการเขียนลำดับเว้นระยะ
          </Text>
          <Image
            style={{
              width: 380,
              height: 84,
              alignSelf: "center",
            }}
            source={require("../assets/Ex5.png")}
          />
          <Text style={styles.text}>
            ลำดับแบบมีค่าแตกต่างเป็นชุด{"\n"}
            ลำดับแบบมีค่าแตกต่างเป็นชุด
            เป็นลำดับอนุกรมที่เกิดจากค่าความแตกต่างที่เป็นชุด
            คือหลายตัวประกอบขึ้นมาและใช้ค่าแตกต่างที่เป็นชุดดังกล่าวในการพิจารณาเลขอนุกรมลำดับถัดไป
            {"\n"}
            ตัวอย่างการเขียนลำดับแบบมีค่าแตกต่างเป็นชุด
          </Text>
          <Image
            style={{
              width: 380,
              height: 61,
              alignSelf: "center",
            }}
            source={require("../assets/Ex6.png")}
          />
          <Text style={styles.text}>
            ลำดับยกกำลัง{"\n"}
            ลำดับยกกำลัง เป็นลำดับเลขอนุกรม ซึ่งเกิดจากการยกกำลังของตัวเลขต่าง ๆ
            หรืออาจเกิดจากค่าความแตกต่างที่อาจเป็นเลขยกกำลัง{"\n"}
            ตัวอย่างการเขียนลำดับยกกำลัง
          </Text>
          <Image
            style={{
              width: 400,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../assets/Ex7.png")}
          />
          <Text style={styles.text}></Text>
        </SafeAreaView>
        <SafeAreaView style={styles.row}>
          <SafeAreaView style={styles.header}>
            <Text style={styles.header}>ความรู้เบื้องต้นเกี่ยวกับอนุกรม</Text>
          </SafeAreaView>
          <Text style={styles.text}>
            ถ้า a1, a2, a3, …, an เป็นลำดับจำกัดที่มี n พจน์
            จะเรียกการเขียนแสดงผลบวกของพจน์ทุกพจน์ของลำดับในรูป a1 + a2 + a3 + …
            + an ว่าอนุกรมจำกัด{"\n"}
            และในทำนองเดียวกัน ถ้า a1, a2, a3, …, an, … เป็นลำดับอนันต์ จะ
            เรียกการเขียนแสดงผลบวกในรูป a1 + a2 + a3 + … + an + …
            ว่าอนุกรมอนันต์{"\n"}
            {"\n"}
            ความหมายของอนุกรม และสัญลักษณ์แทนการบวก{"\n"}
            กำหนด a1, a2, a3, … , an เป็นลำดับจำกัด จะได้ a1 + a2 + a3 + … + an
            เป็นอนุกรมจำกัด{"\n"}
            และ เมื่อ a1, a2, a3, …, an, … เป็นลำดับอนันต์ จะได้ a1 + a2 + a3 +
            … + an + … เป็นอนุกรมอนันต์{"\n"}
            {"\n"}
            โดยจากบทนิยาม เราจะได้ว่าอนุกรมจำกัดมาจากลำดับจำกัด
            และอนุกรมอนันต์มาจากลำดับอนันต์{"\n"}
            จากอนุกรม a1 + a2 + a3 + … + an + …{"\n"}
            เรียก a1 ว่าพจน์ที่ 1 ของอนุกรม{"\n"}
            เรียก a2 ว่าพจน์ที่ 2 ของอนุกรม{"\n"}
            เรียก a3 ว่าพจน์ที่ 3 ของอนุกรม{"\n"}
            และเรียก an ว่าพจน์ที่ n ของอนุกรม{"\n"}
            {"\n"}
            ตัวอย่างของการเขียนอนุกรม{"\n"}– ตัวอย่างที่ 1 : 1 + 3 + 5 + 7 + … +
            99 เป็นอนุกรมจำกัด ที่ได้จากลำดับจำกัด 1, 3, 5, 7, …, 99{"\n"}–
            ตัวอย่างที่ 2 : 1 + 2 + 4 + … + 2n-1 + … เป็นอนุกรมอนันต์
            ที่ได้จากลำดับอนันต์ 1, 2, 4, …, 2n-1 , …{"\n"}
            {"\n"}
            อนุกรมเลขคณิต อนุกรมที่ได้จากลำดับเลขคณิต เรียกว่า อนุกรมเลขคณิต
            และผลต่างร่วมของลำดับเลขคณิตเป็นผลต่างร่วมของอนุกรมเลขคณิตด้วย{"\n"}
            เมื่อ a1, a1 + d, a1 + 2d, …, a1 + (n – 1)d เป็นลำดับเลขคณิต จะได้
            a1 + (a1 + d) + (a1 + 2d) + … + (a1 + (n – 1)d) เป็นอนุกรมเลขคณิต
            ซึ่งมี a1 เป็นพจน์แรกของอนุกรม และ d เป็นผลต่างร่วมของอนุกรมเลขคณิต
            {"\n"}
            จากบทนิยาม จะได้ว่า ถ้า a1, a2, a3, …, an เป็น ลำดับเลขคณิต ที่มี n
            พจน์ จะเรียกการเขียนแสดงผลบวกของพจน์ทุกพจน์ของลำดับในรูป a1 + a2 +
            a3 + … + an ว่า อนุกรมเลขคณิต และผลต่างร่วม (d) ของลำดับเลขคณิต
            เป็นผลต่างร่วมของอนุกรมเลขคณิตด้วย{"\n"}
            {"\n"}
            อนุกรมเรขาคณิต{"\n"}
            อนุกรมที่ได้จากลำดับเรขาคณิต เรียกว่า อนุกรมเรขาคณิต
            และอัตราส่วนร่วมของลำดับเรขาคณิตจะเป็นอัตราส่วนร่วมของอนุกรมเรขาคณิตด้วย
            {"\n"}
            เมื่อ a1, a1r, a1r2, …, a1r n-1 เป็นลำดับเรขาคณิต จะได้ a1 + a1r +
            a1r2 + … + a1r n-1 เป็นอนุกรมเรขาคณิต ซึ่งมี a1 เป็นพจน์แรก และ r
            เป็นอัตราส่วนร่วมของอนุกรมเรขาคณิต{"\n"}
            จากบทนิยาม จะได้ว่า ถ้า a1, a2, a3, …, an เป็น ลำดับเรขาคณิต ที่มี n
            พจน์ จะเรียกการเขียนแสดงผลบวกของพจน์ทุกพจน์ของลำดับในรูป a1 + a2 +
            a3 + … + an ว่า อนุกรมเรขาคณิต และอัตราส่วนร่วมของลำดับเรขาคณิต
            จะเป็นอัตราส่วนร่วมของอนุกรมเรขาคณิตด้วย
          </Text>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#FFC768",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
  },
  row: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D91200",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default ConicSection;
