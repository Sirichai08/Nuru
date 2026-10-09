// GRURU MUSEUM - Interactive Data Booming & Knowledge Graph Engine

const nodesData = [
  {
    id: "center-0",
    title: "GRURU MUSEUM",
    titleEn: "Digital Knowledge Hub",
    category: "center",
    color: "#D7FF3A",
    radius: 36,
    x: 0,
    y: 0,
    era: "2026 - อนาคต",
    specimenId: "GRM-2026-CORE-000",
    summary: "ศูนย์กลางพิพิธภัณฑ์ความรู้ดิจิทัลสไตล์ Future Archaeology ที่ขุดค้น ถอดรหัส และเชื่อมโยงความรู้สู่ชีวิตประจำวัน",
    takeaway: "เข้าใจแก่นแท้ของความรู้ข้ามยุคสมัย แล้วดึงไปปรับใช้ในการตัดสินใจและสร้างสรรค์นวัตกรรมใหม่ได้ทันที"
  },
  {
    id: "node-1",
    title: "วิทยาศาสตร์ & การแพทย์",
    titleEn: "Science & Medicine",
    category: "science",
    color: "#00BFDE",
    radius: 24,
    angle: 0,
    distance: 140,
    era: "ร.4 - ยุคปัจจุบัน",
    specimenId: "GRM-1868-SCI-014",
    summary: "การเปลี่ยนผ่านจากสมุนไพรโบราณและดาราศาสตร์ไทย สู่เทคโนโลยีชีวภาพและการแพทย์แม่นยำ (Precision Medicine)",
    takeaway: "ตรวจเช็กแหล่งข้อมูลและผลวิจัยก่อนตัดสินใจเรื่องสุขภาพ อาศัยหลักสถิติแทนความเชื่อ"
  },
  {
    id: "node-2",
    title: "ประวัติศาสตร์ & โบราณคดี",
    titleEn: "History & Archaeology",
    category: "history",
    color: "#FF5A1F",
    radius: 24,
    angle: 60,
    distance: 150,
    era: "สุโขทัย - รัตนโกสินทร์",
    specimenId: "GRM-1283-HIS-002",
    summary: "การถอดรหัสจารึก จดหมายเหตุ และบันทึกการค้าทางทะเล เพื่อเข้าใจพลวัตทางสังคมและการปรับตัวของชุมชน",
    takeaway: "วิเคราะห์เหตุการณ์ปัจจุบันด้วยบริบทในอดีต เข้าใจที่มาเพื่อคาดการณ์แนวโน้มอนาคต"
  },
  {
    id: "node-3",
    title: "เทคโนโลยี & ปัญญาประดิษฐ์",
    titleEn: "Technology & AI",
    category: "tech",
    color: "#8C6BFF",
    radius: 26,
    angle: 120,
    distance: 160,
    era: "ยุคดิจิทัล 2026+",
    specimenId: "GRM-2026-TECH-088",
    summary: "โครงข่าย Knowledge Graph, Semantic Web และโมเดล Machine Learning เพื่อสังเคราะห์ข้อมูลมหาศาล",
    takeaway: "ประยุกต์ใช้เครื่องมือดิจิทัลเพื่อจัดระเบียบความคิดและลดเวลาการทำงานลง 80%"
  },
  {
    id: "node-4",
    title: "ภูมิปัญญาท้องถิ่น & อาหาร",
    titleEn: "Local Wisdom & Gastronomy",
    category: "culture",
    color: "#F59E0B",
    radius: 22,
    angle: 180,
    distance: 145,
    era: "อยุธยา - ปัจจุบัน",
    specimenId: "GRM-1685-CUL-031",
    summary: "เทคนิคการหมักดอง ฤดูกาลของสมุนไพร และสถาปัตยกรรมเรือนไทยที่สอดรับกับสภาพภูมิอากาศเขตร้อนชื้น",
    takeaway: "เลือกรับประทานอาหารตามฤดูกาลและสมดุลวัตถุดิบท้องถิ่นเพื่อเสริมภูมิต้านทานร่างกาย"
  },
  {
    id: "node-5",
    title: "สิ่งแวดล้อม & วิถีชีวภาพ",
    titleEn: "Nature & Bio Green",
    category: "nature",
    color: "#10B981",
    radius: 22,
    angle: 240,
    distance: 155,
    era: "ยุคก่อนประวัติศาสตร์ - ปัจจุบัน",
    specimenId: "GRM-1920-BIO-059",
    summary: "ความหลากหลายทางชีวภาพ การหมุนเวียนธาตุอาหารในระบบนิเวศป่าชายเลนและลุ่มน้ำเจ้าพระยา",
    takeaway: "ปรับเปลี่ยนการใช้ชีวิตสู่ Zero-Waste และประหยัดพลังงานในที่อยู่อาศัยตามหลักธรรมชาติ"
  },
  {
    id: "node-6",
    title: "ศิลปะ & การออกแบบสร้างสรรค์",
    titleEn: "Arts & Creative Design",
    category: "art",
    color: "#F43F5E",
    radius: 22,
    angle: 300,
    distance: 140,
    era: "รัตนโกสินทร์ - ร่วมสมัย",
    specimenId: "GRM-1980-ART-042",
    summary: "การตีความลวดลายกนกและสัดส่วนเรขาคณิตไทยดั้งเดิมสู่ Visual Branding และ UI Design ยุคใหม่",
    takeaway: "นำอัตลักษณ์รากเหง้าดั้งเดิมมาผสมผสานกับความเรียบง่ายแบบสากลเพื่อสร้างคุณค่าใหม่"
  }
];

// Sub-nodes for secondary drill-down
const subNodes = [
  { parentId: "node-1", title: "สมุนไพรตำรับยา", angle: -25, dist: 60, color: "#00BFDE" },
  { parentId: "node-1", title: "ดาราศาสตร์สยาม", angle: 25, dist: 60, color: "#00BFDE" },
  { parentId: "node-2", title: "จารึกพ่อขุนราม", angle: 35, dist: 65, color: "#FF5A1F" },
  { parentId: "node-2", title: "การค้าสำเภาโบราณ", angle: 85, dist: 65, color: "#FF5A1F" },
  { parentId: "node-3", title: "Knowledge Graphs", angle: 95, dist: 65, color: "#8C6BFF" },
  { parentId: "node-3", title: "Generative AI", angle: 145, dist: 65, color: "#8C6BFF" },
  { parentId: "node-4", title: "การหมักเครื่องแกง", angle: 160, dist: 60, color: "#F59E0B" },
  { parentId: "node-4", title: "เรือนไทยไร้ตะปู", angle: 200, dist: 60, color: "#F59E0B" },
  { parentId: "node-5", title: "ระบบนิเวศป่าโกงกาง", angle: 220, dist: 60, color: "#10B981" },
  { parentId: "node-5", title: "ความมั่นคงทางน้ำ", angle: 260, dist: 60, color: "#10B981" },
  { parentId: "node-6", title: "ลายกนกเรขาคณิต", angle: 280, dist: 60, color: "#F43F5E" },
  { parentId: "node-6", title: "ไทยสตรีทแวร์", angle: 320, dist: 60, color: "#F43F5E" }
];

let canvas, ctx;
let selectedNode = nodesData[0];
let activeFilter = "all";
let isBoomingActive = true;
let animationProgress = 0;
let hoverNode = null;

function initCanvas() {
  canvas = document.getElementById("boomingCanvas");
  if (!canvas) return;
  ctx = canvas.getContext("2d");

  function resize() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  resize();
  window.addEventListener("resize", resize);

  // Animate initial booming burst
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    let progress = (timestamp - start) / 900;
    if (progress > 1) progress = 1;
    animationProgress = progress;
    drawCanvas();
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);

  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("click", onCanvasClick);
}

function getNodePos(node) {
  const rect = canvas.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  if (node.category === "center") {
    return { x: centerX, y: centerY };
  }

  const rad = (node.angle * Math.PI) / 180;
  const curDist = node.distance * animationProgress;
  return {
    x: centerX + Math.cos(rad) * curDist,
    y: centerY + Math.sin(rad) * curDist
  };
}

function drawCanvas() {
  const rect = canvas.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;
  const centerX = w / 2;
  const centerY = h / 2;

  ctx.clearRect(0, 0, w, h);

  // Background radar circles (Time Rings)
  ctx.save();
  ctx.strokeStyle = "rgba(140, 107, 255, 0.08)";
  ctx.lineWidth = 1;
  [80, 145, 210].forEach(r => {
    ctx.beginPath();
    ctx.arc(centerX, centerY, r * animationProgress, 0, Math.PI * 2);
    ctx.stroke();
  });
  ctx.restore();

  // Draw Connections from center
  nodesData.forEach(node => {
    if (node.category === "center") return;
    const pos = getNodePos(node);

    ctx.save();
    ctx.strokeStyle = node.id === selectedNode.id ? "#FF5A1F" : "rgba(100, 116, 139, 0.25)";
    ctx.lineWidth = node.id === selectedNode.id ? 2.5 : 1.2;
    if (node.id === selectedNode.id) {
      ctx.setLineDash([4, 4]);
    }
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    ctx.restore();

    // Draw Sub-nodes
    subNodes.filter(s => s.parentId === node.id).forEach(sub => {
      const subRad = (sub.angle * Math.PI) / 180;
      const subX = pos.x + Math.cos(subRad) * (sub.dist * animationProgress);
      const subY = pos.y + Math.sin(subRad) * (sub.dist * animationProgress);

      ctx.save();
      ctx.strokeStyle = "rgba(148, 163, 184, 0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      ctx.lineTo(subX, subY);
      ctx.stroke();

      // Sub node circle
      ctx.fillStyle = sub.color;
      ctx.beginPath();
      ctx.arc(subX, subY, 6, 0, Math.PI * 2);
      ctx.fill();

      // Sub node label
      ctx.font = "10px 'IBM Plex Sans Thai', sans-serif";
      ctx.fillStyle = "#64748B";
      ctx.fillText(sub.title, subX + 9, subY + 3);
      ctx.restore();
    });
  });

  // Draw main nodes
  nodesData.forEach(node => {
    const pos = getNodePos(node);
    const isSelected = selectedNode && selectedNode.id === node.id;
    const isHover = hoverNode && hoverNode.id === node.id;

    ctx.save();
    // Glowing ring on selected
    if (isSelected) {
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, node.radius + 8, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(215, 255, 58, 0.35)";
      ctx.fill();
    }

    // Node body
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, node.radius, 0, Math.PI * 2);
    ctx.fillStyle = node.color;
    ctx.fill();
    ctx.lineWidth = isSelected ? 3 : 1.5;
    ctx.strokeStyle = "#0B0B0F";
    ctx.stroke();

    // Title label
    ctx.font = node.category === "center" ? "bold 13px 'Chakra Petch'" : "600 12px 'Chakra Petch'";
    ctx.fillStyle = node.category === "center" ? "#0B0B0F" : "#1E293B";
    ctx.textAlign = "center";
    ctx.fillText(node.title, pos.x, pos.y + node.radius + 16);

    ctx.restore();
  });
}

function onMouseMove(e) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  let found = null;
  nodesData.forEach(node => {
    const pos = getNodePos(node);
    const dist = Math.hypot(mouseX - pos.x, mouseY - pos.y);
    if (dist <= node.radius + 6) {
      found = node;
    }
  });

  if (hoverNode !== found) {
    hoverNode = found;
    canvas.style.cursor = found ? "pointer" : "default";
    drawCanvas();
  }
}

function onCanvasClick(e) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  nodesData.forEach(node => {
    const pos = getNodePos(node);
    const dist = Math.hypot(mouseX - pos.x, mouseY - pos.y);
    if (dist <= node.radius + 8) {
      selectNode(node);
    }
  });
}

function selectNode(node) {
  selectedNode = node;
  updateDetailPanel(node);
  drawCanvas();
}

function updateDetailPanel(node) {
  const codeEl = document.getElementById("panelCode");
  const titleEl = document.getElementById("panelTitle");
  const titleEnEl = document.getElementById("panelTitleEn");
  const eraEl = document.getElementById("panelEra");
  const catEl = document.getElementById("panelCategory");
  const summaryEl = document.getElementById("panelSummary");
  const takeawayEl = document.getElementById("panelTakeaway");

  if (codeEl) codeEl.innerText = node.specimenId;
  if (titleEl) titleEl.innerText = node.title;
  if (titleEnEl) titleEnEl.innerText = node.titleEn;
  if (eraEl) eraEl.innerText = node.era;
  if (catEl) catEl.innerText = node.category.toUpperCase();
  if (summaryEl) summaryEl.innerText = node.summary;
  if (takeawayEl) takeawayEl.innerText = node.takeaway;
}

// Global Filter Button Events
function setupFilterButtons() {
  const buttons = document.querySelectorAll(".booming-category-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-cat");
      if (cat === "all") {
        selectNode(nodesData[0]);
      } else {
        const target = nodesData.find(n => n.category === cat);
        if (target) selectNode(target);
      }
    });
  });
}

// Trigger Booming Animation (Re-burst)
function triggerBoomingBurst() {
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    let progress = (timestamp - start) / 700;
    if (progress > 1) progress = 1;
    animationProgress = progress;
    drawCanvas();
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
  initCanvas();
  setupFilterButtons();

  const burstBtn = document.getElementById("btnTriggerBooming");
  if (burstBtn) {
    burstBtn.addEventListener("click", triggerBoomingBurst);
  }
});
