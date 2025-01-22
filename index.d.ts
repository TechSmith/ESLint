import eslint from 'eslint';

export default function(ignores: string[], globals: Record<string, false>): eslint.Linter.Config[];