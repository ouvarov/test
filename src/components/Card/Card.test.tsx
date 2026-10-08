import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  // Rendering
  it('renders without crashing', () => {
    render(<Card title="Test Card">Content</Card>);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  // Content
  it('displays the provided title', () => {
    render(<Card title="My Title">Content</Card>);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('My Title');
  });

  it('renders children content', () => {
    render(<Card title="Title">Card body text</Card>);
    expect(screen.getByText('Card body text')).toBeInTheDocument();
  });

  // Interactions
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Card title="Clickable" onClick={handleClick}>Content</Card>);
    fireEvent.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Defaults
  it('does not throw when onClick is not provided', () => {
    expect(() => {
      render(<Card title="No handler">Content</Card>);
      fireEvent.click(screen.getByText('No handler'));
    }).not.toThrow();
  });

  // Edge cases
  it('renders with empty string title', () => {
    render(<Card title="">Content</Card>);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('');
  });

  // Semantics
  it('renders title as an h3 element', () => {
    render(<Card title="Heading">Content</Card>);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });
});