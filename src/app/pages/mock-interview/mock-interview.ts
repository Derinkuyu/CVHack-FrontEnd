import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { InterviewHeader, InterviewHeaderData } from './components/interview-header/interview-header';
import { ChatWindow, ChatMessage } from './components/chat-window/chat-window';
import { ChatInput } from './components/chat-input/chat-input';

@Component({
  selector: 'app-mock-interview',
  imports: [Navbar, InterviewHeader, ChatWindow, ChatInput],
  templateUrl: './mock-interview.html',
  styleUrl: './mock-interview.css',
})
export class MockInterview implements OnInit {

  headerData: InterviewHeaderData = {
    jobTitle: 'Senior Frontend Engineer',
    company: 'Nile Logic',
    currentQuestion: 1,
    totalQuestions: 8,
  };

  messages: ChatMessage[] = [];
  isLoading = false;
  private questionIndex = 0;

  private questions = [
    "Hi! Welcome to your mock interview for the Senior Frontend Engineer position at Nile Logic. Let's get started! Can you walk me through your experience building large-scale frontend applications?",
    "Great! How do you approach performance optimization in a React application?",
    "Can you describe a time you had to make a difficult technical decision and how you handled trade-offs?",
    "How do you ensure your code is maintainable and scalable for other developers?",
    "Tell me about your experience with TypeScript. How has it improved your development workflow?",
    "How do you approach testing in frontend applications?",
    "Describe your experience with CSS architecture. What methodologies do you prefer and why?",
    "Finally, where do you see frontend development heading in the next 2-3 years, and how are you preparing for those changes?",
  ];

  private feedbacks = [
    "Good answer! You clearly have solid experience. Try to quantify your impact more — numbers always make answers stronger.",
    "Nice response! Consider mentioning specific tools like Lighthouse or Web Vitals to back up your approach.",
    "Strong answer! You demonstrated good decision-making skills. Adding the outcome of that decision would make it even better.",
    "Great points on maintainability! Mentioning code review practices or documentation would strengthen your answer.",
    "Excellent! TypeScript knowledge is key for this role. Consider adding examples of how you've used advanced types.",
    "Good coverage of testing! Mentioning specific testing libraries like Jest or Cypress would add more depth.",
    "Solid understanding of CSS architecture! Real project examples would make this answer stand out.",
    "Impressive forward-thinking! Showing that you're actively learning these technologies would be a strong closing.",
  ];

  async ngOnInit() {
    this.isLoading = true;
    await this.delay(1000);
    this.messages = [{ type: 'ai-question', text: this.questions[0] }];
    this.questionIndex = 1;
    this.isLoading = false;
  }

  async onSend(text: string) {
    this.messages = [...this.messages, { type: 'user-answer', text }];
    this.isLoading = true;

    await this.delay(1200);

    const feedbackIndex = this.questionIndex - 1;
    if (feedbackIndex < this.feedbacks.length) {
      this.messages = [...this.messages, {
        type: 'ai-feedback',
        text: this.feedbacks[feedbackIndex],
      }];
    }

    await this.delay(800);

    if (this.questionIndex < this.questions.length) {
      this.messages = [...this.messages, {
        type: 'ai-question',
        text: this.questions[this.questionIndex],
      }];
      this.headerData = {
        ...this.headerData,
        currentQuestion: this.questionIndex + 1,
      };
      this.questionIndex++;
    } else {
      this.messages = [...this.messages, {
        type: 'ai-feedback',
        text: "That concludes our mock interview! Overall you performed well. Keep practicing and good luck with your real interview at Nile Logic! 🎉",
      }];
    }

    this.isLoading = false;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}