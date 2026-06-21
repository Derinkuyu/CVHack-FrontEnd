import { Component } from '@angular/core';
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
export class MockInterview {

  headerData: InterviewHeaderData = {
    jobTitle: 'Senior Frontend Engineer',
    company: 'Nile Logic',
    currentQuestion: 2,
    totalQuestions: 8,
  };

  messages: ChatMessage[] = [
    {
      type: 'ai-question',
      text: 'To start, walk me through your experience building large-scale frontend applications.',
    },
    {
      type: 'user-answer',
      text: 'I led the rebuild of our analytics dashboard in React and TypeScript, cutting load time by 40% and mentoring two engineers along the way.',
    },
    {
      type: 'ai-feedback',
      text: 'Strong opener — you anchored it in concrete projects. To make it land harder, quantify the impact (users reached, load-time gains).',
    },
    {
      type: 'ai-question',
      text: 'How do you approach performance optimization in a React application?',
    },
  ];

  onSend(text: string) {
    // Add user answer
    this.messages = [
      ...this.messages,
      { type: 'user-answer', text },
    ];

    // Simulate AI feedback after a short delay
    setTimeout(() => {
      this.messages = [
        ...this.messages,
        {
          type: 'ai-feedback',
          text: 'Good answer! Try to include specific tools or metrics you used to measure the improvement.',
        },
      ];

      // Next question after feedback
      setTimeout(() => {
        this.headerData = {
          ...this.headerData,
          currentQuestion: Math.min(this.headerData.currentQuestion + 1, this.headerData.totalQuestions),
        };
        this.messages = [
          ...this.messages,
          {
            type: 'ai-question',
            text: 'Can you describe a time you had to make a difficult technical decision and how you handled trade-offs?',
          },
        ];
      }, 1200);
    }, 800);
  }
}
