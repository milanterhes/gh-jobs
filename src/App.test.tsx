import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Home page', () => {
  test('renders header correctly', () => {
    const { getByText } = render(<App />);
    const gh: HTMLSpanElement = getByText(/github/i);
    const jobs = getByText(/jobs/i);
    
    expect(gh).toBeInTheDocument();
    expect(gh.classList.contains('bold')).toBeTruthy();
    expect(jobs).toBeInTheDocument();
  });
  
  test('renders footer', () => {
    const { getByText } = render(<App />);
    const footer = getByText(/Milan Terhes @ DevChallenges.io/i);
    expect(footer).toBeInTheDocument();
  });
})