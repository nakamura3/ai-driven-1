# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

React + TypeScript + Vite で構築した TODO アプリ。

## コマンド

```bash
npm install       # 依存関係のインストール
npm run dev       # 開発サーバー起動 (http://localhost:5173)
npm run build     # プロダクションビルド (dist/)
npm run preview   # ビルド結果のプレビュー
```

## アーキテクチャ

状態管理は `src/hooks/useTodos.ts` の `useTodos` カスタムフックに集約されており、localStorage への永続化もここで行う。フィルター状態 (`all` / `active` / `completed`) も同フック内で管理する。

コンポーネント構成:
- `App.tsx` — フックを呼び出し、各コンポーネントに props を渡すルート
- `TodoInput` — テキスト入力 + 全件完了ボタン
- `TodoList` — フィルター済みリストのレンダリング
- `TodoItem` — 個別アイテム（ダブルクリックでインライン編集、空文字確定で削除）
- `TodoFilter` — フッター（件数表示・フィルター切替・完了済み削除）

型定義は `src/types.ts` の `Todo` / `Filter` を共有する。
