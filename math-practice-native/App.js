import React, { useMemo, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const OPERATIONS = ["+", "-", "*"];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createQuestion() {
  const op = OPERATIONS[randomInt(0, OPERATIONS.length - 1)];
  let a = randomInt(1, 12);
  let b = randomInt(1, 12);

  if (op === "-" && b > a) {
    [a, b] = [b, a];
  }

  const answer = op === "+" ? a + b : op === "-" ? a - b : a * b;
  return { a, b, op, answer };
}

export default function App() {
  const [question, setQuestion] = useState(createQuestion());
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState({ correct: 0, wrong: 0 });

  const total = useMemo(() => score.correct + score.wrong, [score]);

  const checkAnswer = () => {
    const userAnswer = Number(input.trim());

    if (!input.trim() || Number.isNaN(userAnswer)) {
      setMessage("Enter a valid number.");
      return;
    }

    if (userAnswer === question.answer) {
      setScore((s) => ({ ...s, correct: s.correct + 1 }));
      setMessage("Correct!");
    } else {
      setScore((s) => ({ ...s, wrong: s.wrong + 1 }));
      setMessage(`Wrong. Correct answer: ${question.answer}`);
    }

    setInput("");
    setQuestion(createQuestion());
  };

  const reset = () => {
    setScore({ correct: 0, wrong: 0 });
    setMessage("");
    setInput("");
    setQuestion(createQuestion());
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Math Practice</Text>

      <View style={styles.card}>
        <Text style={styles.question}>
          {question.a} {question.op} {question.b} = ?
        </Text>

        <TextInput
          value={input}
          onChangeText={setInput}
          keyboardType="numeric"
          placeholder="Type your answer"
          style={styles.input}
          onSubmitEditing={checkAnswer}
        />

        <TouchableOpacity style={styles.button} onPress={checkAnswer}>
          <Text style={styles.buttonText}>Check Answer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.secondary]} onPress={reset}>
          <Text style={[styles.buttonText, styles.secondaryText]}>Reset Score</Text>
        </TouchableOpacity>

        <Text style={styles.message}>{message}</Text>
      </View>

      <View style={styles.stats}>
        <Text style={styles.statText}>Correct: {score.correct}</Text>
        <Text style={styles.statText}>Wrong: {score.wrong}</Text>
        <Text style={styles.statText}>Total: {total}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 20,
    color: "#1f2937"
  },
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3
  },
  question: {
    fontSize: 34,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 18,
    color: "#111827"
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    padding: 12,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 12
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16
  },
  secondary: {
    backgroundColor: "#e5e7eb"
  },
  secondaryText: {
    color: "#111827"
  },
  message: {
    marginTop: 14,
    textAlign: "center",
    fontSize: 16,
    color: "#374151",
    minHeight: 22
  },
  stats: {
    flexDirection: "row",
    gap: 14,
    marginTop: 16
  },
  statText: {
    fontSize: 16,
    color: "#1f2937",
    fontWeight: "600"
  }
});
