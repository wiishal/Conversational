# Conversational AI Chatbot Platform

## Overview

Conversational is a **multi-chatbot AI platform** that enables users to interact with different chatbots, each powered by advanced AI models. The platform is built using **LangChain.js** and **Gemini LLM**, ensuring intelligent and context-aware responses.

## Key Features

- **Multiple Chatbots**: Users can select from different AI chatbots, each tailored for specific interactions.
- **Conversation Analysis**: Get detailed analysis of your conversation.which includes summery, strength, flow etc.
- **LangChain.js for AI Processing**: Utilizes LangChain.js to structure and manage AI-powered conversations efficiently.
- **Gemini LLM Integration**: Provides high-quality, contextually aware responses.
- **Clerk for Authentication**: Ensures secure user login and session management.


## Technology Stack

- **Frontend**: Next.js with TypeScript
- **AI Framework**: LangChain.js
- **Language Model**: Gemini LLM
- **Authentication**: Clerk
- **UI Styling**: Tailwind CSS

## Understanding Chatbots & LangChain.js

### What is a Chatbot?

A **Chatbot** is an AI-driven software application that can simulate human conversation. It processes user inputs and generates meaningful responses based on its training data and algorithms. In this project, multiple chatbots allow users to engage in different types of conversations.

### Role of LangChain.js

**LangChain.js** is a JavaScript library designed for developing AI-driven applications. It provides:

- **Prompt Engineering**: Structuring user input for optimal AI understanding.
- **Memory Management**: Ensuring contextual continuity in responses.
- **API Integration**: Facilitates communication with large language models (like Gemini).

### How Conversational Uses LangChain.js

1. **User Input Handling**: Processes and cleans user messages.
2. **LLM Querying**: Sends structured input to Gemini LLM.
3. **Response Generation**: Returns AI-generated replies to the chat UI.
4. **Session Control**: Ensures each conversation follows a logical flow.

## Project Structure

- **`src/app/components/`** - Reusable UI components.
- **`src/app/discover/`** - Frontend routing for different AI sections
- **`src/app/api/`** - Handles API routes for processing chat interactions.
- **`src/app/controllers`** - Handles API requests and logic
- **`src/app/services`** -API calls and external data handling
- **`src/app/utils/`** - Helper functions for AI processing and UI updates.
- **`public/`** - Stores static assets such as images and icons.

## Future Enhancements

- Implementing **session-based storage** for temporary message retention.
- Expanding chatbot personalities for **diverse conversation styles**.
- Adding a **typing effect** to enhance user experience.

## Get Started

1. Clone the repository: `git clone https://github.com/wiishal/Conversational`
2. Install dependencies: `npm install`
3. Run the project: `npm run dev`
4. Sign in via Clerk and start chatting with AI!

## Conclusion

Conversational provides an engaging, privacy-focused, and scalable AI chatbot experience. Built with **Next.js, LangChain.js, and Gemini LLM**, it offers an intelligent and modular approach to AI-driven conversations.
