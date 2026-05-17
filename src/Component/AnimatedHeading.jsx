import React from "react";
import { motion } from "framer-motion";

const headingVariants = {
  rest: { x: 0 },
  hover: { x: -4 },
};

const segmentVariants = {
  rest: { x: 0 },
  hover: { x: 3 },
};

const headingTransition = {
  type: "spring",
  staggerChildren: 0.04,
  delayChildren: 0.05,
};

const motionTags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
};

const isTextNode = (value) =>
  typeof value === "string" || typeof value === "number";

const flattenTextContent = (children) =>
  React.Children.toArray(children)
    .map((child) => {
      if (isTextNode(child)) {
        return String(child);
      }

      if (React.isValidElement(child) && child.type === React.Fragment) {
        return flattenTextContent(child.props.children);
      }

      return "";
    })
    .join("");

const renderText = (value, keyPrefix) =>
  String(value)
    .split(/(\s+)/)
    .flatMap((token, index) => {
      if (!token) {
        return [];
      }

      if (/^\s+$/.test(token)) {
        return (
          <React.Fragment key={`${keyPrefix}-${index}`}>
            {" "}
          </React.Fragment>
        );
      }

      return (
        <span
          key={`${keyPrefix}-${index}`}
          className="inline-flex whitespace-nowrap"
        >
          {Array.from(token).map((char, charIndex) => (
            <motion.span
              key={`${keyPrefix}-${index}-${charIndex}`}
              variants={segmentVariants}
              transition={{ type: "spring" }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      );
    });

const renderStyledText = (value, keyPrefix, spanProps = {}) =>
  String(value)
    .split(/(\s+)/)
    .flatMap((token, index) => {
      if (!token) {
        return [];
      }

      if (/^\s+$/.test(token)) {
        return (
          <React.Fragment key={`${keyPrefix}-${index}`}>
            {" "}
          </React.Fragment>
        );
      }

      return (
        <motion.span
          key={`${keyPrefix}-${index}`}
          variants={segmentVariants}
          transition={{ type: "spring" }}
          className={[
            "inline-block whitespace-nowrap",
            spanProps.className,
          ]
            .filter(Boolean)
            .join(" ")}
          style={spanProps.style}
        >
          {token}
        </motion.span>
      );
    });

const renderChildren = (children, keyPrefix = "heading") =>
  React.Children.toArray(children).flatMap((child, index) => {
    const childKey = `${keyPrefix}-${index}`;

    if (isTextNode(child)) {
      return renderText(child, childKey);
    }

    if (!React.isValidElement(child)) {
      return child;
    }

    if (child.type === React.Fragment) {
      return (
        <React.Fragment key={childKey}>
          {renderChildren(child.props.children, childKey)}
        </React.Fragment>
      );
    }

    if (typeof child.type === "string" && child.type === "br") {
      return React.cloneElement(child, { key: childKey });
    }

    if (typeof child.type === "string" && child.type === "span") {
      return (
        <React.Fragment key={childKey}>
          {renderStyledText(flattenTextContent(child.props.children), childKey, {
            className: child.props.className,
            style: child.props.style,
          })}
        </React.Fragment>
      );
    }

    return React.cloneElement(
      child,
      { key: childKey },
      renderChildren(child.props.children, childKey),
    );
  });

function AnimatedHeading({ as = "h2", children, ...props }) {
  const MotionTag = motionTags[as] ?? motion.h2;

  return (
    <MotionTag
      initial="rest"
      whileHover="hover"
      variants={headingVariants}
      transition={headingTransition}
      {...props}
    >
      {renderChildren(children)}
    </MotionTag>
  );
}

export default AnimatedHeading;
