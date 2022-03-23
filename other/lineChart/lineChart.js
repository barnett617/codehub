import { Point2d, computeLine } from './index.js'
// 支持动态数据源
// 支持线的绘制类型（实现、虚线）
export class LineChart {
    constructor(data, type) {
        this.get2d()
        this.data = data || []
        this.type = type || 'line '
        this.pointSet = new Set()
        this.distance = 2
        this.axisData = []
        this.yxisData = []
        this.realData = []
        this.xPoints = []
        this.yPoints = []
        this.tolerance = 30
        this.tooltip = document.getElementById('tooltip')
        this.lineType = 'line'
    }

    get2d() {
        this.canvas = document.getElementById('canvas')
        this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this))
        this.ctx = this.canvas.getContext('2d')
        this.width = canvas.width
        this.height = canvas.height
    }
    
    setOption(option) {
        const {
            // x轴数据源
            xAxis,
            // y轴数据源
            yAxis,
            // 折线数据源
            series,
            // 线类型
            lineType
        } = option
        // x轴初始化
        const { data: xData } = xAxis
        if (!xData || !xData.length) {
            throw new Error('[option error]: xAxis data is required')
        }
        this.axisData = xData

        // y轴初始化
        const { data: yData } = yAxis
        this.yxisData = yData

        // 数据源初始化
        if (!series || !series.length) {
            throw new Error('[option error]: series data is required')
        }
        
        this.realData = series

        // 线类型初始化
        this.lineType = lineType

        // 线绘制
        this.initDraw()
    }

    initDraw() {
        //定义坐标轴相对于画布的内边距
        this.paddingLeft = 30 // 至少大于绘制文字的宽度
        this.paddingBottom = 30 // 至少大于绘制文字的高度
        this.origin = new Point2d(
            this.paddingLeft,
            this.height - this.paddingBottom
        )
        this.addxAxis()
        this.addyAxis()
        this.generateLineCharts()
    }

    addxAxis() {
        this.XaxisEnd = this.origin
            .clone()
            .add(new Point2d(this.width - this.paddingLeft * 2, 0))
        this.drawLine(this.origin, this.XaxisEnd)
        this.drawLineWithDiscrete(
            this.origin,
            this.XaxisEnd,
            this.axisData.length
        )
    }

    drawLineWithDiscrete(start, end, n = 5) {
        // 由于 x 轴上的 y 都是相同的
        const points = []
        const textPoints = []
        const startX = start.x
        const endX = end.x

        points.push(start)
        const segmentValue = (endX - startX) / n
        for (let i = 0; i <= n - 1; i++) {
            const textpoint = new Point2d(
                startX + i * segmentValue + segmentValue / 2 - 10,
                start.y + 20
            )
            textPoints.push({
                point: textpoint,
                text: this.axisData[i],
            })
            points.push(new Point2d(startX + i * segmentValue, start.y))
        }
        points.push(end)

        // 生成线段
        points.forEach((point) => {
            this.drawLine(point, point.clone().add(new Point2d(0, 5)))
        })
        // 生成文字
        this.clearFillColor()
        textPoints.forEach((info) => {
            const { text, point } = info
            this.xPoints.push(point.x)
            this.ctx.fillText(text, point.x, point.y, 20)
        })
    }

    addyAxis() {
        const end = this.origin
            .clone()
            .sub(new Point2d(0, this.height - this.paddingBottom * 2))
        this.yAxisEnd = end
        const points = []
        const division = (this.origin.y - this.yAxisEnd.y) / this.yxisData[this.yxisData.length - 1]
        for (let i = 0; i < this.yxisData.length; i++) {
            const point = new Point2d(end.x, this.origin.y - i * division * 50)
            points.push({
                point,
                text: this.yxisData[i],
            })
        }
        points.forEach((info) => {
            const { text, point } = info
            const end = point
                .clone()
                .add(new Point2d(this.width - this.paddingLeft * 2, 0))
            this.setStrokeColor('#E0E6F1')
            this.drawLine(point, end)
            this.clearStrokeColor()
            this.ctx.fillText(text, point.clone().x - 30, point.y + 4, 20)
        })
    }

    // 绘制线
    generateLineCharts() {
        const division = (this.origin.y - this.yAxisEnd.y) / this.yxisData[this.yxisData.length - 1]
        this.realData.forEach(( { type, data, lineColor } ) => {
            const yPoints = data.map(y => {
                return this.origin.y - y * division
            })
            this.drawLineChart(this.xPoints, yPoints, type, lineColor)
        })
    }

    drawLineChart(xPoints, yPoints, lineType, lineColor = '#5370C6') {
        this.setStrokeColor(lineColor)
        let start = new Point2d(xPoints[0], yPoints[0])
        this.drawCircle(start)
        // 生成折线图
        xPoints.slice(1).forEach((x, index) => {
            const end = new Point2d(x, yPoints[index + 1])
            this.drawCircle(end)
            this.drawLine(start, end, lineType)
            start = end
        })
    }

    drawDashLine(start, end) {
        if (!start || !end) {
            return
        }
        this.ctx.save()
        this.ctx.setLineDash([5, 10])
        this.beginPath()
        this.moveTo(start.x, start.y)
        this.lineTo(end.x, end.y)
        this.stroke()
        this.ctx.restore()
    }

    closePath() {
        this.ctx.closePath()
    }

    setFillColor(color) {
        this.ctx.fillStyle = color
    }

    clearFillColor() {
        this.ctx.fillStyle = 'black'
    }

    setStrokeColor(color) {
        this.ctx.strokeStyle = color
    }

    clearStrokeColor() {
        this.ctx.strokeStyle = 'black'
    }

    beginPath() {
        this.ctx.beginPath()
    }

    lineTo(x, y) {
        this.ctx.lineTo(x, y)
    }

    moveTo(x, y) {
        this.ctx.moveTo(x, y)
    }

    fill() {
        this.ctx.fill()
    }

    stroke() {
        this.ctx.stroke()
    }

    drawLineCircle(start, end, type) {
        const flag = type === 'left'
        const { x: startX, y: startY } = start
        const { x: endX, y: endY } = end
        const center = this.getOnePointOnLine(
            start.clone(),
            end.clone(),
            flag ? startX - this.distance : endX + this.distance
        )
        this.drawCircle(center)
    }

    drawLine(start, end, lineType) {
        const { x: startX, y: startY } = start
        const { x: endX, y: endY } = end
        this.beginPath()
        this.moveTo(startX, startY)

        // 线条定制化
        switch (lineType) {
            case 'dashLine':
                this.ctx.setLineDash([5, 10])
                break
            default:
                break
        }
        this.lineTo(endX, endY)
        this.stroke()
        this.closePath()
    }

    getOnePointOnLine(start, end, t = 2) {
        return computeLine(start, end, t)
    }

    drawCircle(center, radius = 4, color) {
        const { x, y } = center
        this.beginPath()
        this.setFillColor(color)
        this.ctx.arc(x, y, radius, 0, Math.PI * 2, true) // 绘制
        this.ctx.fill()
    }

    onMouseMove(e) {
        const x = e.offsetX
        const find = this.xPoints.findIndex(
            (item) => Math.abs(x - item) <= this.tolerance
        )
        if (find > -1) {
            this.tooltip.textContent = `数据：${this.axisData[find]}_ ${this.yxisData[find]}`
            this.tooltip.style.visibility = 'visible'
            this.tooltip.style.left = e.clientX + 2 + 'px'
            this.tooltip.style.top = e.clientY + 2 + 'px'
            const start = new Point2d(this.xPoints[find], this.origin.y)
            const end = new Point2d(this.xPoints[find], 0)

            this.clearData()
            this.drawDashLine(start, end)
            this.ctx.setLineDash([])
            this.addxAxis()
            this.addyAxis()
            this.setStrokeColor('#5370C6')
            this.generateLineCharts()
        } else {
            this.tooltip.style.visibility = 'hidden'
        }
    }

    clearData() {
        this.ctx.clearRect(0, 0, 600, 600)
        this.xPoints = []
        this.yPoints = []
    }
}