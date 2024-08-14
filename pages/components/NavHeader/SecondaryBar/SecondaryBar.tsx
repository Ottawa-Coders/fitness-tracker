import React from "react";
import Link from "next/link";
import { SecondaryBarProps } from "@/app/constants";

import styles from "./SecondaryBar.module.css";

const SecondaryBar = (props: SecondaryBarProps) => {
  return (
    <div className={styles.secondaryBarContainer}>
      <div className={styles.secondaryBarContent}>
        {props.secondaryTabs
          ? props.secondaryTabs.map((tab, index) => {
              return (
                <Link
                  key={index}
                  href={tab.link}
                  className={
                    styles.secondaryBarLink +
                    " " +
                    (props.secondary == tab.link ? styles.active : "")
                  }
                >
                  {tab.label}
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default SecondaryBar;
