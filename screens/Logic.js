import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";

const Logic = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.row}>
          <SafeAreaView style={styles.header}>
            <Text style={styles.header}>ประพจน์</Text>
          </SafeAreaView>
          <Text style={styles.text}>
            &emsp;ประพจน์ คือ ประโยคหรือข้อความที่สามารถบอกค่าความจริงว่า
            เป็นจริงหรือเท็จได้
            จะอยู่ในรูปแบบของประโยคบอกเล่าหรือประโยคปฏิเสธก็ได้ มักใช้สัญลักษณ์
            p, q, r, s หรือตัวอักษรอื่นๆในการแทนประพจน์{"\n"}{"\n"}
            &emsp;ข้อสังเกต ประโยคที่จะเป็นประพจน์ได้จะต้องไม่มีความกำกวม
            ต้องสามารถตอบได้ว่าเป็นจริงหรือเท็จ{"\n"}{"\n"}
            &emsp;ตัวอย่างเช่น ประโยคต่อไปนี้เป็นประพจน์หรือไม่{"\n"}
            1 + 1 = 8 เป็นประพจน์เพราะตอบได้ว่าประโยคนี้เป็นเท็จ{"\n"}
            กรุงเทพฯเป็นเมืองหลวงของประเทศไทย เป็นประพจน์เพราะตอบได้ว่าประโยคนี้เป็นจริง{"\n"} 
            นั่นคือตัวอะไร ไม่เป็นประพจน์เพราะเป็นประโยคคำถาม{"\n"}
            x เป็นจำนวนจริง ไม่เป็นประพจน์เพราะไม่รู้ว่า x คืออะไร
          </Text>
        </SafeAreaView>
        <SafeAreaView style={styles.row}>
          <SafeAreaView style={styles.header}>
            <Text style={styles.header}>การเชื่อมประพจน์</Text>
          </SafeAreaView>
          <Text style={styles.text}>
            &emsp;การเชื่อมประพจน์ มีด้วยกัน 4 แบบ ได้แก่{"\n"}
            {"\n"}
            1.และ (∧) เป็นจริงเพียงกรณีเดียวคือ T ∧ T เป็น T{"\n"}
            2.หรือ (∨) เป็นเท็จเพียงกรณีเดียวคือ F ∨ F เป็น F{"\n"}
            3.ถ้า…แล้ว (→) เป็นเท็จเพียงกรณีเดียวคือ T → F เป็น F{"\n"}
            4.ก็ต่อเมื่อ (↔) ถ้ามีค่าความจริงเหมือนกันจะเป็นจริง
            ไม่เหมือนกันจะเป็นเท็จ{"\n"}
            {"\n"}
            &emsp;หรือดังตารางต่อไปนี้
          </Text>
          <Image
            style={{
              width: 400,
              height: 200,
              alignSelf: "center",
            }}
            source={require("../assets/truth.png")}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.row}>
          <SafeAreaView style={styles.header}>
            <Text style={styles.header}>ค่าความจริงของประพจน์</Text>
          </SafeAreaView>
          <Text style={styles.text}>
            &emsp;การหาค่าความจริงของประพจน์
            โดยที่โจทย์ไม่ได้กำหนดค่าความจริงของประพจน์ย่อยๆมาให้
            ต้องพิจารณาค่าความจริงที่อาจจะเกิดขึ้นได้ทั้งหมดจากประพจน์ย่อยๆ
            วิธีที่นิยมคือการสร้างตารางค่าความจริง{"\n"}
            {"\n"}
            &emsp;ซึ่งถ้ามีประพจน์ย่อยทั้งหมด n ประพจน์จะได้ค่าความจริงที่อาจจะเกิดขึ้นได้ 2n กรณี{"\n"}
            {"\n"}
            &emsp;ตัวอย่าง จงสร้างตารางค่าความจริงทุกกรณีที่เป็นไปได้ของประพจน์
            (p∨q)↔p{"\n"}
            {"\n"}
            วิธีทำ ประพจน์ (p∨q)↔p มีประพจน์ย่อย 2 ประพจน์ คือ p และ q
            ค่าความจริงที่เป็นไปได้ทั้งหมดคือ 2^2 = 4 กรณี
            สามารถสร้างตารางได้ดังนี้
          </Text>
          <Image
            style={{
              width: 400,
              height: 100,
              alignSelf: "center",
            }}
            source={require("../assets/Ex1.jpg")}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.row}>
          <SafeAreaView style={styles.header}>
            <Text style={styles.header}>การสมมูลและนิเสธของประพจน์</Text>
          </SafeAreaView>
          <Text style={styles.text}>
            &emsp;นิเสธของประพจน์ คือ
            ประพจน์ที่มีค่าความจริงตรงกันข้ามกับประพจน์นั้นๆ
            (จากจริงเป็นเท็จ/จากเท็จเป็นจริง) สามารถเขียนแทนนิเสธของประพจน์ p
            ได้ด้วย ~p{"\n"}
            {"\n"}
            &emsp;การสมมูลของประพจน์ การที่ประพจน์ 2 ประพจน์สมมูลกัน
            ก็ต่อเมื่อประพจน์ทั้ง 2 ประพจน์มีค่าความจริงเหมือนกันทุกรณี
            สามารถเขียนแทนการสมมูลด้วย "≡"{"\n"}
            {"\n"}
            &emsp;รูปแบบของประพจน์ที่สมมูลกัน{"\n"}
            {"\n"}
            1. ~(~p) ≡ p{"\n"}
            2. p∧q ≡ q∧p{"\n"}
            3. p∨q ≡ q∨p{"\n"}
            4. p↔q ≡ q↔p{"\n"}
            5. p∧(q∧r) ≡ (p∧q)∧r{"\n"}
            6. p∨(q∨r) ≡ (p∨q)∨r{"\n"}
            7. p↔(q↔r) ≡ (p↔q)↔r{"\n"}
            8. p∧(q∨r) ≡ (p∧q)∨(p∧r){"\n"}
            9. p∨(q∧r) ≡ (p∨q)∧(p∨r){"\n"}
            10. p→q ≡ ~p∨q{"\n"}
            11. p→q ≡ ~q→~p{"\n"}
            12. p↔q ≡ (p→q)∧(q→p){"\n"}
            13. ~(p∧q) ≡ ~p∨~q{"\n"}
            14. ~(p∨q) ≡ ~p∧~q{"\n"}
            15. ~(p→q) ≡ ~(~p∨q) ≡ p∧~q{"\n"}
            16. ~(p↔q) ≡ ~p↔q ≡ p↔~q{"\n"}
            17. ~(p↔q) ≡ (p∧~q)∨(q∧~p){"\n"}
            {"\n"}
            &emsp;ตัวอย่าง จงตรวจสอบว่าประพจน์ ~p→q สมมูลกับประพจน์ p∨q หรือไม่
            {"\n"}
            {"\n"}
            วิธีทำ สร้างตารางค่าความจริงได้ 4 กรณี ได้ดังนี้
          </Text>
          <Image
            style={{
              width: 400,
              height: 100,
              alignSelf: "center",
            }}
            source={require("../assets/Ex2.jpg")}
          />
          <Text style={styles.text}>
            จากตารางค่าความจริงของประพจน์ ~p→q และ p∨q
            พบว่ามีค่าความจริงเหมือนกันทุกกรณี ดังนั้น ประพจน์ ~p→q
            สมมูลกับประพจน์ p∨q หรือ ~p→q ≡ p∨q
          </Text>
        </SafeAreaView>
        <SafeAreaView style={styles.row}>
          <SafeAreaView style={styles.header}>
            <Text style={styles.header}>สัจนิรันดร์และการอ้างเหตุผล</Text>
          </SafeAreaView>
          <Text style={styles.text}>
            &emsp;สัจนิรันดร์ คือ
            รูปแบบของประพจน์ที่จะมีค่าความจริงเป็นจริงทุกกรณี{"\n"}
            {"\n"}
            &emsp;วิธีการตรวจสอบการเป็นสัจนิรันดร์{"\n"}
            {"\n"}
            1. สร้างตารางค่าความจริง ให้สร้างตารางค่าความจริง
            แล้วดูค่าความจริงขั้นสุดท้ายของประพจน์ว่าเป็นจริง (T) ทุกกรณีหรือไม่
            ถ้าเป็นจริงทุกกรณีแสดงว่าประพจน์นั้นเป็นสัจนิรันดร์{"\n"}
            2. การใช้สมบัติข้อขัดแย้ง
            โดยสมมติให้ประพจน์นั้นมีค่าความจริงเป็นเท็จ (F)
            จากนั้นวิเคราะห์ย้อนกลับไปยังประพจน์ย่อยๆ
            เพื่อดูค่าความจริงของประพจน์ว่าขัดแย้งกันหรือไม่{"\n"}
            &emsp;1. ถ้าขัดแย้งกันแสดงว่า ไม่มีโอกาสเกิดเท็จได้
            ประพจน์นั้นก็เป็นสัจนิรัดร์{"\n"}
            &emsp;2. ถ้าไม่ขัดแย้งกันแสดงว่า มีโอกาสเกิดเท็จได้
            ประพจน์นั้นก็ไม่เป็นสัจนิรัดร์{"\n"}
            {"\n"}
            &emsp;การอ้างเหตุผล คือ การสรุปว่าสิ่งที่ระบุมานั้นสมเหตุสมผลหรือไม่
            เริ่มจากนำข้อความที่กำหมดให้ซึ่งจะมี เหตุ(P) และ ผล(C) โดยนำ “เหตุ”
            ทั้งหมดมาเชื่อมด้วย “และ (∧)” แล้วนำไปเชื่อมด้วย “ถ้าแล้ว (→)” กับ
            “ผล” แล้วดูว่าเป็นสัจนิรันดร์หรือไม่
            ถ้าเป็นสัจนิรันดร์แปลว่าข้อความนั้นสมเหุสมผล{"\n"}
            {"\n"}
            &emsp;ตัวอย่าง การอ้างเหตุผลนี้สมเหตุสมผลหรือไม่{"\n"}
            เหตุ{"\n"}
            &ensp;p→q{"\n"}
            &ensp;~q{"\n"}
            ผล{"\n"}
            &ensp;~p{"\n"}
            วิธีทำ นำเหตุทั้งหมดมาเชื่อมกันด้วย ∧ แล้วเชื่อมกับผลด้วย → จะได้
            [(p→q)∧~q]→~p
            แล้วตรวจสอบความเป็นสัจนิรันดร์โดยการสร้างตารางค่าความจริงดังนี้
          </Text>
          <Image
            style={{
              width: 400,
              height: 100,
              alignSelf: "center",
            }}
            source={require("../assets/Ex3.png")}
          />
          <Text style={styles.text}>
            จากตารางค่าความจริงพบว่าประพจน์ [(p→q)∧~q]→~p เป็นสัจนิรันดร์
            แสดงว่า การอ้างเหตุผลนี้สมเหตุสมผล
          </Text>
        </SafeAreaView>
        <SafeAreaView style={styles.row}>
          <SafeAreaView style={styles.header}>
            <Text style={styles.header}>ตัวบ่งปริมาณและประโยคเปิด</Text>
          </SafeAreaView>
          <Text style={styles.text}>
            &emsp;ประโยคเปิด คือประโยคบอกเล่า หรือประโยคปฏิเสธที่มีตัวแปรแล้วเมื่อแทนตัวแปรลงไปจะได้เป็นประพจน์ เช่น{"\n"}
            a เป็นจำนวนคี่{"\n"}
            คนสวมเสื้อสีแดง{"\n"}
            {"\n"}
            &emsp;ตัวบ่งปริมาณ คือ ข้อความที่บอกเงื่อนไขของค่าตัวแปรที่จะนำไปแทน
            เพื่อให้ประโยคเปิด กลายเป็นประพจน์ มี 2 แบบ คือ{"\n"}
            &ensp;∀x หมายถึง x ทุกตัวที่อยู่ในเอกภพสัมพัทธ์{"\n"}
            &ensp;∃x หมายถึง x บางตัวที่อยู่ในเอกภพสัมพัทธ์
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
  },
});


export default Logic;
