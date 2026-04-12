<script setup>
import { ref, computed } from 'vue'

const testData = {
  measurements: [
    { com: 'GND', volt: '1.0V', range: '90 Ω – 250 Ω' },
    { com: 'GND', volt: '1.15V', range: '20 Ω – 95 Ω' },
    { com: 'GND', volt: '1.8V', range: '25 Ω – 90 Ω' },
    { com: 'GND', volt: '3.3V', range: '1.2 kΩ – 17.0 kΩ' },
    { com: '1.0V', volt: '1.15V', range: '110 Ω – 425 Ω' },
    { com: '1.0V', volt: '1.8V', range: '150 Ω – 425 Ω' },
    { com: '1.0V', volt: '3.3V', range: '6.0 kΩ – 17.0 kΩ' },
    { com: '1.15V', volt: '1.8V', range: '35 Ω – 300 Ω' },
    { com: '1.15V', volt: '3.3V', range: '6.0 kΩ – 17.0 kΩ' },
    { com: '1.8V', volt: '3.3V', range: '6.0 kΩ – 17.0 kΩ' },
  ],
  preCheck: "Before measuring, ensure the multimeter is set to the 20kΩ resistance mode. Additionally, verify that no external components are connected to the motherboard.",
}

const currentIndex = ref(-1)
const results = ref([])

const currentTest = computed(() => testData.measurements[currentIndex.value])
const hasFails = computed(() => results.value.some(r => r.status !== 'Pass'))

function startTest() {
  currentIndex.value = 0
  results.value = []
}

function handleResult(status) {
  results.value.push({
    test: currentTest.value,
    status
  })
  currentIndex.value++
}

function goBack() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    results.value.pop()
  }
}
</script>

<template>
  <div class="trim-tester">
    <h3 class="persistent-title">Wii Resistance Checker</h3>

    <div v-if="currentIndex === -1" class="start-screen">
      <div class="warning pre-check">
        <p><strong>Important:</strong> {{ testData.preCheck }}</p>
      </div>
      <button @click="startTest" class="btn btn-primary start-button">Start Testing</button>
    </div>

    <div v-else-if="currentIndex < testData.measurements.length" class="interactive-screen">
      <div class="test-card">
        <h4 class="test-header">Measure <code>{{ currentTest.com }}</code> to <code>{{ currentTest.volt }}</code></h4>

        <div class="instruction-box">
          <p>Place the <strong>COM (Black) probe</strong> on point <code>{{ currentTest.com }}</code></p>
          <p>Place the <strong>+ (Red) probe</strong> on point <code>{{ currentTest.volt }}</code></p>
        </div>

        <div class="target-reading">
          <p class="expected-value">Expected Range:</p>
          <p class="expected-range vp-doc"><strong>{{ currentTest.range }}</strong></p>
        </div>

        <div class="actions">
          <button class="btn btn-fail" @click="handleResult('Fail')">✗ Fail (0Ω-15Ω Short)</button>
          <button class="btn btn-pass" @click="handleResult('Pass')">✓ Pass (In Range)</button>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar" :style="{ width: ((currentIndex) / testData.measurements.length * 100) + '%' }">
          </div>
        </div>
        <div class="step-footer">
          <div class="footer-side">
            <button type="button" v-if="currentIndex > 0" class="back-link" @click="goBack">← Back</button>
          </div>
          <p class="step-indicator">Step {{ currentIndex + 1 }} of {{ testData.measurements.length }}</p>
          <div class="footer-side"></div>
        </div>
      </div>
    </div>

    <div v-else class="summary-screen">

      <div v-if="hasFails" class="alert alert-fail">
        <p><strong>Warning:</strong> Testing failed. Check for shorts or broken traces on the affected lines. Ensure all
          edges are thoroughly sanded and retest before proceeding.</p>
      </div>
      <div v-else class="alert alert-pass">
        <p><strong>Success:</strong> All tests passed. The trim is operating as expected.</p>
      </div>

      <div class="table-container vp-doc">
        <table class="summary-table">
          <thead>
            <tr>
              <th class="table-header-text">Test Pair</th>
              <th class="table-header-text">Expected</th>
              <th class="table-header-text">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(res, index) in results" :key="index"
              :class="{ 'row-fail': res.status !== 'Pass', 'row-pass': res.status === 'Pass' }">
              <td><code>{{ res.test.com }}</code> ➔ <code>{{ res.test.volt }}</code></td>
              <td>{{ res.test.range }}</td>
              <td class="text-white">
                <strong>{{ res.status === 'Pass' ? 'Pass' : 'Fail' }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="summary-footer">
        <button @click="startTest" class="btn btn-primary restart-button">Restart Test</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trim-tester {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  margin: 1.5rem 0;
}

.persistent-title {
  text-align: center;
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 1.5rem;
}

.test-complete-header {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.start-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.warning.pre-check p {
  margin: 0;
}

.warning.pre-check {
  background-color: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-text);
  padding: 1.25rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  border-left: 4px solid var(--vp-c-warning-1);
  text-align: left;
  width: 100%;
}

.btn {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s, background-color 0.2s;
  font-size: 0.95rem;
  text-align: center;
}

.start-button {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
}

.restart-button {
  display: block;
}

.btn:hover {
  opacity: 0.85;
}

.btn-primary {
  background-color: var(--custom-brand-button-bg);
  color: var(--custom-brand-button-text) !important;
}

.btn-primary:hover {
  background-color: var(--custom-brand-button-hover-bg);
  opacity: 1;
}

.progress-bar-container {
  height: 8px;
  background-color: var(--vp-c-divider);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 2rem;
}

.progress-bar {
  height: 100%;
  background-color: var(--vp-c-brand-1);
  transition: width 0.3s ease;
}

.step-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
}

.footer-side {
  flex: 1;
}

.back-link {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
}

.back-link:hover {
  color: var(--vp-c-brand-1);
}

.step-indicator {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0;
  text-align: center;
  flex: 2;
}

.summary-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  gap: 1rem;
}

.test-card {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.5rem;
}

.test-header {
  margin-top: 0;
  font-size: 1.2rem;
  text-align: center;
}

.instruction-box {
  background-color: var(--vp-c-bg-alt);
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  text-align: center;
}

.instruction-box p {
  margin: 0.5rem 0;
}

.target-reading {
  text-align: center;
  margin-bottom: 1.5rem;
}

.expected-value {
  font-size: 1.0rem;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
  color: var(--vp-c-text-2);
}

.expected-range {
  font-size: 1.25rem;
  margin-top: 0;
}

.actions {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

@media (min-width: 640px) {
  .actions {
    grid-template-columns: 1fr 1fr;
  }
}

.btn-pass {
  background-color: var(--vp-c-success-1);
  color: var(--vp-c-neutral-inverse, white) !important;
}

.btn-fail {
  background-color: var(--vp-c-danger-1);
  color: var(--vp-c-neutral-inverse, white) !important;
}

.alert p {
  margin: 0;
}

.alert {
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}

.alert-fail {
  background-color: var(--vp-c-danger-soft, #fee2e2);
  color: var(--vp-c-text-1) !important;
  border-left: 4px solid var(--vp-c-danger-1, #ef4444);
}

.alert-pass {
  background-color: var(--vp-c-success-soft, #d1fae5);
  color: var(--vp-c-text-1) !important;
  border-left: 4px solid var(--vp-c-success-1, #10b981);
}

.table-container {
  overflow-x: auto;
  width: 100%;
  margin: 0 auto;
}

.summary-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  display: table !important;
}

:deep(.summary-table tr) {
  background-color: transparent !important;
}

.summary-table th,
.summary-table td {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--vp-c-divider);
  text-align: left;
}

.summary-table th {
  background-color: var(--vp-c-bg-alt);
  font-weight: 600;
}

.table-header-text {
  color: var(--vp-c-text-1) !important;
}

:deep(.summary-table tr.row-fail) {
  background-color: var(--vp-c-danger-soft) !important;
}

:deep(.summary-table tr.row-pass) {
  background-color: var(--vp-c-success-soft) !important;
}

.text-white {
  color: white !important;
}
</style>
