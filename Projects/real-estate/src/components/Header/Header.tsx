"use client";
import styles from "./Header.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button, Select, Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const onChangeLanguage = (path: string) => {};

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <header className={styles.header}>
      <div className={`background`}>
        <div className={`center`}>
          <div className={`items ${styles.items}`}>
            <div className={styles.left}>
              {/* logo */}
              <Link href="/" className={styles.logoLeft}>
                <h1>{pathname}</h1>
              </Link>
              {/* burger menu */}
              <Button
                size="large"
                type="text"
                onClick={showDrawer}
                icon={<MenuOutlined />}
                className={`${styles.menu_button}`}
              />
              <Drawer placement="left" onClose={closeDrawer} open={visible} className={styles.menuDrawwr}>
                <Menu
                  mode="inline"
                  onClick={closeDrawer}
                  className={styles.menu}
                  style={{ borderRight: "0", display:'flex', flexDirection: 'column'}}
                >
                  <Menu.Item className={`w100p`} style={{ padding: 0 }}>
                    <Link href="/rent" className={`w100p`}>
                      <Button
                        size="large"
                        type="text"
                        style={
                          pathname == "/rent"
                            ? { background: "#E7E6FA", color: "#7065F0" }
                            : {}
                        }
                        className={`w100p`}
                      >
                        Rent
                      </Button>
                    </Link>
                  </Menu.Item>
                  <Menu.Item className={`w100p`} style={{ padding: 0 }}>
                    <Link href="/buy" className={`w100p`}>
                      <Button
                        size="large"
                        type="text"
                        style={
                          pathname == "/buy"
                            ? { background: "#E7E6FA", color: "#7065F0" }
                            : {}
                        }
                        className={`w100p`}
                      >
                        Buy
                      </Button>
                    </Link>
                  </Menu.Item>
                  <Menu.Item className={`w100p`} style={{ padding: 0 }}>
                    <Link href="/sell" className={`w100p`}>
                      <Button
                        size="large"
                        type="text"
                        style={
                          pathname == "/sell"
                            ? { background: "#E7E6FA", color: "#7065F0" }
                            : {}
                        }
                        className={`w100p`}
                      >
                        Sell
                      </Button>
                    </Link>
                  </Menu.Item>
                  <Menu.Item className={`w100p`} style={{ padding: 0 }}>
                    <Link href="/sell" className={`w100p`}>
                      <Button
                        size="large"
                        type="text"
                        style={
                          pathname == "/sell"
                            ? { background: "#E7E6FA", color: "#7065F0" }
                            : {}
                        }
                        className={`w100p`}
                      >
                        Sell
                      </Button>
                    </Link>
                  </Menu.Item>
                  <Menu.Item className={`w100p`} style={{ padding: 0 }}>
                    <Link href="/sell" className={`w100p`}>
                      <Button
                        size="large"
                        type="text"
                        style={
                          pathname == "/sell"
                            ? { background: "#E7E6FA", color: "#7065F0" }
                            : {}
                        }
                        className={`w100p`}
                      >
                        Sell
                      </Button>
                    </Link>
                  </Menu.Item>
                </Menu>
              </Drawer>
            </div>
            <div className={styles.center}>
              {/* logo */}
              <Link href="/" className={styles.logoCenter}>
                <h1>{pathname}</h1>
              </Link>
              {/* navigation */}
              <Link href="/rent" className={styles.navigationButton}>
                <Button
                  size="large"
                  type="text"
                  style={
                    pathname == "/rent"
                      ? { background: "#E7E6FA", color: "#7065F0" }
                      : {}
                  }
                >
                  Rent
                </Button>
              </Link>
              <Link href="/buy" className={styles.navigationButton}>
                <Button
                  size="large"
                  type="text"
                  style={
                    pathname == "/buy"
                      ? { background: "#E7E6FA", color: "#7065F0" }
                      : {}
                  }
                >
                  Buy
                </Button>
              </Link>
              <Link href="/sell" className={styles.navigationButton}>
                <Button
                  size="large"
                  type="text"
                  style={
                    pathname == "/sell"
                      ? { background: "#E7E6FA", color: "#7065F0" }
                      : {}
                  }
                >
                  Sell
                </Button>
              </Link>
              <Link href="/sell" className={styles.navigationButton}>
                <Button
                  size="large"
                  type="text"
                  style={
                    pathname == "/sell"
                      ? { background: "#E7E6FA", color: "#7065F0" }
                      : {}
                  }
                >
                  Sell
                </Button>
              </Link>
              <Link href="/sell" className={styles.navigationButton}>
                <Button
                  size="large"
                  type="text"
                  style={
                    pathname == "/sell"
                      ? { background: "#E7E6FA", color: "#7065F0" }
                      : {}
                  }
                >
                  Sell
                </Button>
              </Link>
            </div>
            <div className={styles.right}>
              <Select
                defaultValue="english"
                bordered={false}
                size="large"
                options={[
                  { value: "uzbek", label: "Uz" },
                  { value: "russian", label: "Ru" },
                  { value: "english", label: "En" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
