import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, useColorScheme } from 'react-native';
import { RadioButton, ProgressBar } from 'react-native-paper';

const questions = [
  {
    question: 'The pressure felt upon the walls of the artery when the heart contracts is known as what type of pressure?',
    options: ['A. Systolic', 'B. Diastolic', 'C. Blood', 'D. Palpated'],
    answer: 'A',
  },
  {
    question: 'Which of the following systems controls breathing?',
    options: ['A. Respiratory', 'B. Skeletal', 'C. Cardiovascular', 'D. Nervous'],
    answer: 'D',
  },
  {
    question: 'The adult human skeleton is made up of how many bones?',
    options: ['A. 203', 'B. 212', 'C. 206', 'D. 33'],
    answer: 'C',
  },
  {
    question: 'In the pneumonic OPQRST what does S stand for?',
    options: ['A. Signs', 'B. Severity', 'C. Symptoms', 'D. Side effects'],
    answer: 'B',
  },
  {
    question: 'When obtaining a blood pressure by palpation, you should be placing your fingers on which of the following arteries?',
    options: ['A. Carotid', 'B. Brachial', 'C. Femoral', 'D. Radial'],
    answer: 'D',
  },
];

export default function MCQScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [testStarted, setTestStarted] = useState(false);
  const [testEnded, setTestEnded] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const colorScheme = useColorScheme();

  const handleStartTest = () => {
    setTestStarted(true);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setTestEnded(true);
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleRestartTest = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setTestStarted(false);
    setTestEnded(false);
    setCorrectAnswers(0);
  };

  const textColor = 'black';
  const backgroundColor = '#F2F7D9';
  const buttonColor = '#F26969';
  const progress = (currentQuestion + 1) / questions.length;

  if (!testStarted) {
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={[styles.text, { color: textColor }]}>Do you want to start the test?</Text>
        <Button title="Start Test" onPress={handleStartTest} color={buttonColor} />
      </View>
    );
  }

  if (testEnded) {
    const score = (correctAnswers / questions.length) * 100;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={[styles.text, { color: textColor }]}>You have completed the test!</Text>
        <Text style={[styles.text, { color: textColor }]}>Your score: {score}%</Text>
        <Button title="Restart Test" onPress={handleRestartTest} color={buttonColor} />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.progressBarContainer}>
        <ProgressBar progress={progress} color={buttonColor} style={styles.progressBar} />
      </View>
      <Text style={[styles.text, { color: textColor }]}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => handleOptionSelect(option[0])} style={styles.optionContainer}>
          <RadioButton
            value={option[0]}
            status={selectedOption === option[0] ? 'checked' : 'unchecked'}
            onPress={() => handleOptionSelect(option[0])}
            color={buttonColor}
          />
          <Text style={[styles.optionText, { color: textColor }]}>{option}</Text>
        </TouchableOpacity>
      ))}
      <Button title="Next Question" onPress={handleNextQuestion} disabled={!selectedOption} color={buttonColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 8,
  },
  progressBarContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  progressBar: {
    height: 10,
  },
});