import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
  skill: string
}

export function SkillCard({ skill,...rest }: SkillCardProps) {
  return (
    <TouchableOpacity activeOpacity={.2} style={styles.buttonSkill} {...rest }>
      <Text style={styles.textSkill}> {skill} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 10,
  },
  textSkill: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
