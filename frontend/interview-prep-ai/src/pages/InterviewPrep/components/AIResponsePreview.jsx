import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

const AIResponsePreview = ({ content }) => {
  if (!content || typeof content !== "string") return null;

  return (
    <div className="max-w-4xl mx-auto text-[14px] prose prose-slate dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";
            const isInline = !className;

            return !isInline ? (
              <CodeBlock
                code={String(children).replace(/\n$/, "")}
                language={language}
              />
            ) : (
              <code className="px-1 py-0.5 bg-gray-100 rounded text-sm" {...props}>
                {children}
              </code>
            );
          },
          p: ({ children }) => <p className="mb-4 leading-5">{children}</p>,
          strong: ({ children }) => <strong>{children}</strong>,
          em: ({ children }) => <em>{children}</em>,
          ul: ({ children }) => <ul className="list-disc pl-6 space-y-2 my-4">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2 my-4">{children}</ol>,
          li: ({ children }) => <li className="mb-1">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4">
              {children}
            </blockquote>
          ),
          h1: ({ children }) => <h1 className="text-2xl font-bold mt-6 mb-4">{children}</h1>,
          h2: ({ children }) => <h2 className="text-xl font-bold mt-6 mb-3">{children}</h2>,
          h3: ({ children }) => <h3 className="text-lg font-bold mt-5 mb-2">{children}</h3>,
          h4: ({ children }) => <h4 className="text-base font-bold mt-4 mb-2">{children}</h4>,
          a: ({ children, href }) => (
            <a href={href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
          tbody: ({ children }) => <tbody className="divide-y divide-gray-200">{children}</tbody>,
          tr: ({ children }) => <tr>{children}</tr>,
          th: ({ children }) => (
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 whitespace-nowrap text-sm">{children}</td>
          ),
          hr: () => <hr className="my-6 border-gray-200" />,
          img: ({ src, alt }) => (
            <img src={src} alt={alt || "image"} className="my-4 max-w-full rounded" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

function CodeBlock({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 border rounded-md overflow-hidden border-gray-700">
      <button
        onClick={copyCode}
        className="absolute top-2 right-2 bg-gray-800 text-white p-1 px-2 rounded text-sm hover:bg-gray-600 transition-all flex items-center gap-1"
      >
        {copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy</>}
      </button>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          padding: "1rem",
          fontSize: "14px",
          backgroundColor: "#282c34",
        }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default AIResponsePreview;
