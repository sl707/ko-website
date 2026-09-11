import React from 'react'
import * as styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerInner}>
      <div className={styles.footerTitle}>고씨중앙종문회</div>
      <p className={styles.footerText}>주소: 서울시 광진구 천호대로 617(중곡동), (우)04931</p>
      <p className={styles.footerText}>
        Address: 617 Cheonho-daero, Gwangjin-gu, Seoul 04931
      </p>
      <p className={styles.footerText}>대표전화: 02-755-0919 &nbsp;|&nbsp; FAX: 02-790-3360</p>
      <p className={styles.footerText}>artspeech@hanmail.net</p>
      <hr className={styles.footerDivider} />
      <p className={styles.footerCopyright}>
        Copyright © {new Date().getFullYear()} 고씨중앙종문회. All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer
