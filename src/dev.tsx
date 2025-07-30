import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Editor from './components/index'
import './index.css'
import Provider from './components/provider'
import { AlignModule } from './components/modules/align'
import { BoldModule } from './components/modules/bold'
import { ItalicModule } from './components/modules/italic'
import { toJson } from './utils/to-json'

function App() {
    const [content, setContent] = useState('<h1>Welcome to ShirEditor!</h1><p>Start editing here...</p>')

    return (
        <Provider>
            <div className="min-h-screen bg-background p-8">
                <div className="fixed top-4 right-4">
                    <button
                        onClick={() => document.documentElement.classList.toggle('dark')}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                        title="تغییر حالت تاریک"
                    >
                        <svg
                            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="4" />
                            <path d="m12 2 0 2" />
                            <path d="m12 20 0 2" />
                            <path d="m4.93 4.93 1.41 1.41" />
                            <path d="m17.66 17.66 1.41 1.41" />
                            <path d="m2 12 2 0" />
                            <path d="m20 12 2 0" />
                            <path d="m6.34 17.66-1.41 1.41" />
                            <path d="m19.07 4.93-1.41 1.41" />
                        </svg>
                        <svg
                            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                        </svg>
                    </button>
                </div>
                <div className="max-w-4xl mx-auto space-y-5">
                    <h1 className="text-3xl font-bold mb-8 text-center">Shir Editor</h1>
                    <Editor
                        value={content}
                        onChange={setContent}
                        className="min-h-[300px]"
                    // config={{
                    //     modules: [
                    //         AlignModule,
                    //         BoldModule,
                    //         ItalicModule,
                    //     ]
                    // }}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            <h2 className="text-xl font-semibold mb-4">خروجی HTML</h2>
                            <pre className="bg-muted p-4 rounded text-sm overflow-auto">
                                <code>{content}</code>
                            </pre>
                        </div>
                        <div className="border rounded-lg p-4" dir='ltr'>
                            <h2 className="text-xl font-semibold mb-4">خروجی JSON</h2>
                            <pre className="bg-muted p-4 rounded text-sm overflow-auto">
                                <code>{JSON.stringify(toJson(content), null, 2)}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
) 