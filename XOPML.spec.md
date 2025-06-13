**Last update**: Friday June 13, 2025; 8:11 PM GMT+0200.

# X-OPML 3.0 spec

## Introduction

X-OPML 3.0 is an extension of the OPML 2.0 format designed to enhance interoperability and functionality for outlining, feed aggregation, and web content structuring. It introduces new header attributes for AI-driven analysis and summarization, as well as custom types for advanced layout and feed handling.

## Document Structure

An X-OPML 3.0 document is an XML file that conforms to the following structure:

```xml
<opml version="3.0">
  <head>
    <!-- Header attributes -->
  </head>
  <body>
    <!-- Outline elements -->
  </body>
</opml>
```

## Header Attributes

In addition to standard OPML 2.0 header attributes, X-OPML 3.0 introduces `<system_prompts>`:
• `⁠<analyse>`⁠: Specifies a prompt to guide AI analysis of articles from feeds.
• `⁠<summarise>`⁠`: Specifies a prompt to guide AI summarization of articles from feeds.

Example:

```xml
<head>
  <title>Example X-OPML 3.0 Document</title>
  <system_prompts>
    <analyse>What are the main arguments and supporting evidence in each article?</analyse>
    <summarise>Summarize each article in two sentences or less.</summarise>
  </system_prompts>
</head>
```

## Custom Types

### Layout Types

Layout types define how outlines are grouped and displayed as websites, pages, or components.

Supported Layout Types
• `webSite`: Represents an entire website.
• `webPage`: Represents a single page within a website.
• `webPageElement`: Represents a section/component of a page.

Layout Attributes
• `title`⁠: The title of the website, page, or element.
• `description`: A description for SEO or accessibility.
• Additional SEO attributes as needed (e.g., `keywords`, `author`).
• For `webPageElement`:
▫ `⁠className⁠`: CSS class name(s) for styling. Ideally in [Tailwind](https://tailwindcss.com/)
▫ `tag⁠`: HTML tag to use (e.g., `⁠header`, `section`, `div`).
▫ `template⁠`: Reference to a template for rendering.

Example:

```xml
<outline
  type="webSite"
  title="My Portfolio"
  description="Showcase of my work">
  <outline
    type="webPage"
    title="About Me"
    description="Learn more about me">
    <outline
      type="webPageElement"
      tag="section"
      className="bio-section"
      template="bioTemplate" />
  </outline>
</outline>
```

### Feed Types

Feed types extend OPML’s standard feed handling to support new content sources and parsing customization.

Supported Feed Types
• `youtube`: For YouTube channel or playlist feeds.
• `reddit`: For Reddit subreddit or user feeds.
• `calendar`: For event feeds (e.g., iCal).

Feed Attributes
• `⁠type⁠`: Specifies the feed type (`⁠youtube⁠`, `⁠reddit⁠`, `⁠calendar⁠`, `rss`, etc.).
• `⁠parser⁠`: Specifies a custom parser or parsing instructions for the feed.
• Additional attributes as required by the feed type.

Example:

```xml
<outline type="youtube"
  text="My YouTube Channel"
  xmlUrl="<youtube_rss_url>"
  parser="myCustomParser"/>
```

### Compatibility

• X-OPML 3.0 is backward compatible with OPML 2.0, but new attributes and types will be ignored by legacy OPML parsers.
• Consumers of X-OPML 3.0 should gracefully ignore unknown attributes and types.

### Extensibility

    •	Additional layout and feed types can be defined by extending the ⁠type⁠ attribute.
    •	Custom attributes are allowed, provided they do not conflict with existing ones.

### Example Document

```xml
<opml version="3.0">
  <head>
    <title>Sample X-OPML 3.0</title>
    <prompts>
      <analyse>Identify the key trends in each article.</analyse>
      <summarise>Provide a concise summary for each feed item.</summarise>
    </prompts>
  </head>
  <body>
    <outline type="webSite" title="News Aggregator" description="Latest news from multiple sources">
      <outline type="webPage" title="Tech News" description="Technology updates">
        <outline type="webPageElement" tag="section" className="w-full">
          <outline type="reddit" text="Reddit Tech" xmlUrl="https://www.reddit.com/r/technology/.rss"/>
        </outline>
        <outline type="webPageElement" tag="section" className="w-[1/12]">
          <outline type="youtube" text="Tech Reviews" xmlUrl="https://www.youtube.com/feeds/videos.xml?channel_id=..."/>
        </outline>
      </outline>
      <outline type="webPage" title="Events" description="Upcoming events">
        <outline type="calendar" text="Event Calendar" xmlUrl="https://calendar.google.com/calendar/ical/xyz/basic.ics" parser="icsParser" />
      </outline>
    </outline>
  </body>
</opml>
```

### Change Log

• 3.0: Introduced AI prompt attributes, layout/feed types, and extensibility for custom attributes.

### References

• OPML 2.0 Specification [↗](https://opml.org/spec2.opml)
