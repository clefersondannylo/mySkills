import React, { useEffect, useState } from "react";
import { FlatList, Platform, StyleSheet, Text, TextInput, View } from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    data ? setMySkills((oldSkills) => [...oldSkills, data]) : null;
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id != id
    ))
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Night");
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Cleferson</Text>
      <Text style={styles.greetings}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="new skill"
        placeholderTextColor={"#696969"}
        onChangeText={setNewSkill}
      />
      <Button title="Add" onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 30 }]}>My Skills</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name} 
            onPress={() => handleRemoveSkill(item.id)} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
    backgroundColor: "#121015",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greetings: {
    color: "#fff",
  },
});
