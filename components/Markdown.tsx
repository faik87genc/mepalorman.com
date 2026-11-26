import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Blog yazısı gövdesi. Ham HTML işlenmez; yazıdaki "#" başlıklar H2 olur (sayfada tek H1). */
export function Markdown({ text }: { text: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h2>{children}</h2>,
        // eslint-disable-next-line @next/next/no-img-element
        img: ({ src, alt }) => <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} loading="lazy" decoding="async" />,
        table: ({ children }) => (
          <div className="table-wrap" role="region" aria-label="Tablo" tabIndex={0}>
            <table>{children}</table>
          </div>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  );
}
