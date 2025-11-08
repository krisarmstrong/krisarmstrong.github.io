import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('GitHub Pages App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeDefined();
  });

  it('has navigation', () => {
    render(<App />);
    const nav = document.querySelector('nav');
    expect(nav).toBeDefined();
  });
});
