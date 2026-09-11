import React from 'react'
import * as styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerInner}>
      <div className={styles.top}>
        <div>
          <h3 className={styles.brandTitle}>고씨중앙종문회</h3>
          <p className={styles.brandDesc}>
            3,739년의 역사와 전통을 이어가는 고씨 가문의 중심 조직입니다.
          </p>
        </div>
        <div>
          <h4 className={styles.columnTitle}>연락처</h4>
          <p className={styles.footerText}>대표전화: 02-755-0919</p>
          <p className={styles.footerText}>FAX: 02-790-3360</p>
          <p className={styles.footerText}>artspeech@hanmail.net</p>
        </div>
        <div>
          <h4 className={styles.columnTitle}>주소</h4>
          <p className={styles.footerText}>
            서울시 광진구 천호대로 617(중곡동)
          </p>
          <p className={styles.footerText}>(우)04931</p>
          <p className={styles.footerText}>
            617 Cheonho-daero, Gwangjin-gu, Seoul
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.footerCopyright}>
          Copyright © {new Date().getFullYear()} 고씨중앙종문회. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
