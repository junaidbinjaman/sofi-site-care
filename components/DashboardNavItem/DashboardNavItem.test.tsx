import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DashboardNavItem from './DashboardNavItem';
import { HomeIcon } from '@heroicons/react/24/outline';

describe('DashboardNavItem', () => {
  const defaultProps = {
    name: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon,
  };

  it('renders the navigation item with the correct name', () => {
    render(<DashboardNavItem {...defaultProps} />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders a link with the correct href', () => {
    render(<DashboardNavItem {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/dashboard');
  });

  it('renders the icon component', () => {
    render(<DashboardNavItem {...defaultProps} />);
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toBeInTheDocument();
  });

  it('applies active styles when current is true', () => {
    render(<DashboardNavItem {...defaultProps} current={true} />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('bg-gray-50', 'text-indigo-600');
  });

  it('applies inactive styles when current is false', () => {
    render(<DashboardNavItem {...defaultProps} current={false} />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('text-gray-700', 'hover:bg-gray-50');
  });

  it('applies inactive styles by default when current is not provided', () => {
    render(<DashboardNavItem {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('text-gray-700');
    expect(link).not.toHaveClass('text-indigo-600');
  });

  it('applies dark mode styles when current is true', () => {
    render(<DashboardNavItem {...defaultProps} current={true} />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('dark:bg-white/5', 'dark:text-white');
  });

  it('applies dark mode styles when current is false', () => {
    render(<DashboardNavItem {...defaultProps} current={false} />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('dark:text-gray-400', 'dark:hover:bg-white/5');
  });

  it('has icon with aria-hidden attribute', () => {
    render(<DashboardNavItem {...defaultProps} />);
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders inside a list item', () => {
    const { container } = render(<DashboardNavItem {...defaultProps} />);
    const listItem = container.querySelector('li');
    expect(listItem).toBeInTheDocument();
  });

  it('applies correct base classes to the link', () => {
    render(<DashboardNavItem {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('group', 'flex', 'gap-x-3', 'rounded-md', 'p-2', 'text-sm/6', 'font-semibold');
  });

  it('applies correct size and shrink classes to the icon', () => {
    render(<DashboardNavItem {...defaultProps} />);
    const icon = screen.getByRole('img', { hidden: true });
    expect(icon).toHaveClass('size-6', 'shrink-0');
  });

  it('renders with different names and hrefs', () => {
    const { rerender } = render(
      <DashboardNavItem name="Team" href="/team" icon={HomeIcon} current={false} />
    );
    expect(screen.getByText('Team')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/team');

    rerender(<DashboardNavItem name="Projects" href="/projects" icon={HomeIcon} current={false} />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/projects');
  });
});
