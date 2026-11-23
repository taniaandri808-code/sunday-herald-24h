export const TEMPLATE_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Georgia, "Times New Roman", serif; color: #14181d; background: #f5efe0; line-height: 1.25; }
  .page { width: 1650px; padding: 22px 30px 16px; background: #f5efe0; }
  /* kicker */
  .kickbar { display: flex; align-items: center; gap: 14px; }
  .kickbar .dia { color: #b2382e; font-size: 13px; letter-spacing: 6px; }
  .kick { flex: 1; text-align: center; font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 6px; color: #0e6b4e; text-transform: uppercase; font-weight: bold; }
  .masthead { text-align: center; font-family: Georgia, serif; font-weight: bold; font-size: 50px; color: #14304d; letter-spacing: 1px; line-height: 1.02; margin-top: 4px; }
  .deskline { text-align: center; font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 4px; color: #5a5a5a; text-transform: uppercase; margin-top: 6px; }
  .datebanner { text-align: center; font-family: Arial, Helvetica, sans-serif; font-weight: 900; font-size: 42px; color: #14181d; letter-spacing: 1px; line-height: 1; margin-top: 8px; }
  .datebanner .yr { color: #b2382e; }
  .standfirst { text-align: center; font-style: italic; font-size: 15px; color: #2a2f36; margin: 7px auto 2px; max-width: 1400px; }
  .standfirst b { color: #b2382e; }
  .rule { border-top: 4px solid #14304d; margin: 10px 0 0; }
  .rule2 { border-top: 1px solid #14304d; margin-top: 3px; }
  /* stat strip */
  .stats { display: flex; gap: 10px; margin-top: 10px; }
  .stat { flex: 1; background: #fffdf6; border: 1px solid #d8cdb4; border-top: 5px solid #0e6b4e; padding: 6px 10px 5px; }
  .stat .n { font-family: Arial, sans-serif; font-weight: 900; font-size: 29px; color: #14304d; line-height: 1; }
  .stat .t { font-size: 11.0px; color: #4a4f56; margin-top: 2px; line-height: 1.25; }
  /* sections */
  .sec { font-family: Arial, sans-serif; font-size: 13px; color: #14304d; text-transform: uppercase; letter-spacing: 3px; font-weight: bold; margin: 8px 0 5px; display: flex; align-items: center; gap: 14px; }
  .sec::before, .sec::after { content: ""; flex: 1; border-top: 1px solid #14304d; }
  /* heroes */
  .heroes { display: flex; border-bottom: 1px solid #b7ab8f; margin-top: 10px; }
  .hero { flex: 1; padding: 0 18px 12px; border-left: 1px solid #b7ab8f; }
  .hero:first-child { border-left: none; padding-left: 0; }
  .hero:last-child { padding-right: 0; }
  .htag { font-family: Arial, sans-serif; font-size: 10.5px; letter-spacing: 2px; color: #b2382e; font-weight: bold; text-transform: uppercase; }
  .clock { display: inline-block; background: #14304d; color: #ffd76a; font-family: Arial, sans-serif; font-weight: 900; font-size: 13px; letter-spacing: 1px; padding: 3px 9px; margin-right: 8px; }
  .hcity { font-family: Arial, sans-serif; font-size: 10.5px; letter-spacing: 1.5px; color: #4a4f56; text-transform: uppercase; }
  .hhead { font-size: 26px; font-weight: bold; color: #14304d; line-height: 1.1; margin: 7px 0 6px; }
  .hbody { font-size: 12.6px; color: #2a2f36; }
  .claim { font-size: 10.5px; font-style: italic; color: #6a6f76; margin-top: 4px; }
  /* timeline grid: three columns, big clock numerals */
  .tgrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 18px; }
  .trow { display: flex; gap: 10px; align-items: flex-start; border-top: 1px solid #d8cdb4; padding: 5px 0 4px; break-inside: avoid; }
  .tclock { flex: 0 0 74px; font-family: Arial, sans-serif; font-weight: 900; font-size: 22px; color: #b2382e; line-height: 1.05; text-align: right; letter-spacing: -0.5px; }
  .tbody { flex: 1; }
  .tcity { font-family: Arial, sans-serif; font-size: 10.4px; letter-spacing: 1.2px; color: #14304d; font-weight: bold; text-transform: uppercase; }
  .treg { font-family: Arial, sans-serif; font-size: 9.6px; letter-spacing: 1px; color: #6a6f76; text-transform: uppercase; margin-left: 7px; background: #e9e1cd; padding: 1px 6px; border-radius: 7px; }
  .ttext { font-size: 13.4px; color: #2a2f36; line-height: 1.22; margin-top: 1px; }
  .tsrc { font-family: Arial, sans-serif; font-size: 9.6px; letter-spacing: 0.5px; color: #8a8f96; text-transform: uppercase; margin-top: 1px; }
  /* also list */
  .also { column-count: 2; column-gap: 26px; }
  .aitem { display: flex; gap: 8px; margin-bottom: 2.5px; break-inside: avoid; font-size: 12.0px; color: #2a2f36; }
  .anum { flex: 0 0 18px; height: 18px; border-radius: 50%; background: #0e6b4e; color: #fff; font-family: Arial, sans-serif; font-size: 10px; font-weight: bold; text-align: center; line-height: 18px; }
  .aitem b { color: #14181d; }
  .asrc { color: #8a8f96; font-size: 10.9px; }
  /* date check */
  .dcbox { margin-top: 8px; border: 1.5px solid #b2382e; background: #fdf6ef; padding: 6px 12px; font-size: 12.0px; line-height: 1.4; color: #333; }
  .dcbox .dctag { display: inline-block; background: #b2382e; color: #fff; font-family: Arial, sans-serif; font-weight: 900; font-size: 10.5px; letter-spacing: 1px; padding: 2px 7px; margin-right: 8px; }
  /* footer */
  .footer { text-align: center; font-size: 12px; color: #2a2f36; margin-top: 3px; }
  .srcs { font-family: Arial, sans-serif; font-size: 9.5px; letter-spacing: 1.5px; color: #14304d; margin-top: 5px; text-transform: uppercase; }
`;
