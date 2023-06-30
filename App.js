import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { db, ref } from "./firebase";
import { getDatabase, set, onValue } from "firebase/database";

export default function App() {
  const [imagePath1, setImagePath1] = useState(require("./img/bulb_on.png"));
  const [imagePath2, setImagePath2] = useState(require("./img/bulb_on.png"));
  const [imagePath3, setImagePath3] = useState(require("./img/bulb_on.png"));
  const [imagePath4, setImagePath4] = useState(require("./img/bulb_on.png"));
  const [imagePath5, setImagePath5] = useState(require("./img/bulb_on.png"));
  const [imagePath6, setImagePath6] = useState(require("./img/bulb_on.png"));

  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [status5, setStatus5] = useState(false);
  const [status6, setStatus6] = useState(false);

  const db = getDatabase();

  const changeImage1 = () => {
   
    if (status1) {
      setImagePath1(require("./img/bulb_off.png"));
    } else {
      setImagePath1(require("./img/bulb_on.png"));
    }
    setStatus1(!status1);
    console.log("test");
     set(ref(db, "swiches/L1/"), {
       status: !status1,
     });
  };
  const changeImage2 = () => {
    setStatus2(!status2);
    set(ref(db, "swiches/L2/"), {
      status: status2,
    });
    if (!status2) {
      setImagePath2(require("./img/bulb_off.png"));
    } else {
      setImagePath2(require("./img/bulb_on.png"));
    }
  };

  const changeImage3 = () => {
    setStatus3(!status3);
    set(ref(db, "swiches/L3/"), {
      status: status3,
    });
    if (!status3) {
      setImagePath3(require("./img/bulb_off.png"));
    } else {
      setImagePath3(require("./img/bulb_on.png"));
    }
  };

  const changeImage4 = () => {
    setStatus4(!status4);
    set(ref(db, "swiches/L4/"), {
      status: status4,
    });
    if (!status4) {
      setImagePath4(require("./img/bulb_off.png"));
    } else {
      setImagePath4(require("./img/bulb_on.png"));
    }
  };

  const changeImage5 = () => {
    setStatus5(!status5);
    set(ref(db, "swiches/L5/"), {
      status: status5,
    });
    if (!status5) {
      setImagePath5(require("./img/bulb_off.png"));
    } else {
      setImagePath5(require("./img/bulb_on.png"));
    }
  };

  const changeImage6 = () => {
    setStatus6(!status6);
    set(ref(db, "swiches/L6/"), {
      status: status6,
    });
    if (!status6) {
      setImagePath6(require("./img/bulb_off.png"));
    } else {
      setImagePath6(require("./img/bulb_on.png"));
    }
  };

  useEffect(() => {
    const starCountRef = ref(db, "swiches/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setStatus1(data.L1.status);
      setStatus2(data.L2.status);
      setStatus3(data.L3.status);
      setStatus4(data.L4.status);
      setStatus5(data.L5.status);
      setStatus6(data.L6.status);

      // changeImage1();
      // changeImage2();
      // changeImage3();
      // changeImage4();
      // changeImage5();
      // changeImage6();

    });
  }, []);

  return (
    <View>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <TouchableOpacity onPress={changeImage1}>
          <Image style={styles.img} source={imagePath1} />
          <Text style={styles.text}>Bulb 1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={changeImage2}>
          <Image style={styles.img} source={imagePath2} />
          <Text style={styles.text}>Bulb 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeImage3}>
          <Image style={styles.img} source={imagePath3} />

          <Text style={styles.text}>Bulb 3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={changeImage4}>
          <Image style={styles.img} source={imagePath4} />
          <Text style={styles.text}>Bulb 4</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={changeImage5}>
          <Image style={styles.img} source={imagePath5} />
          <Text style={styles.text}>Bulb 5</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={changeImage6}>
          <Image style={styles.img} source={imagePath6} />
          <Text style={styles.text}>Bulb 6</Text>
        </TouchableOpacity>
      </View>

      {/* <Image style={styles.img} source={require("./img/OIP.jpeg")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  color: {
    textAlign: "center",
    color: "dodgerblue",
    fontWeight: 500,
    borderColor: "deepskyblue",
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 20,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 10,
  },
  text: {
    marginLeft: 50,
    fontWeight: 500,
  },
});
