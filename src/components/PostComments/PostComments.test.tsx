import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from './';

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  it('Deve permitir adicionar dois comentarios', () => {
    render(<PostComment />);

    fireEvent.change(screen.getByTestId('comment-textarea'), {
      target: { value: 'primeiro comentario' },
    });

    fireEvent.submit(screen.getByTestId('comment-form'));

    expect(screen.getByText('primeiro comentario')).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('comment-textarea'), {
      target: { value: 'segundo comentario' },
    });

    fireEvent.submit(screen.getByTestId('comment-form'));

    expect(screen.getByText('segundo comentario')).toBeInTheDocument();
  });
});