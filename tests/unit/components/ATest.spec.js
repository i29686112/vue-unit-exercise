import { createLocalVue, mount } from '@vue/test-utils'
import table from '@/views/aTest'
var sinon = require('sinon')

// https://medium.com/@envive.tw/%E5%BE%9E%E7%AF%84%E4%BE%8B%E5%AD%B8%E7%BF%92-vue-js-%E7%9A%84-unit-test-44e6f9f1b903
// good example document

// example for stub/mock/spy https://cythilya.github.io/2017/09/17/unit-test-with-mocha-chai-and-sinon/
describe('aTest/index.vue', () => {
  it('have data', () => {
    // sometime we need it
    // const localVue = createLocalVue()

    const wrapper = mount(table, {

      stubs: ['loading', 'el-rate', 'el-dialog', 'el-form', 'el-form-item', 'el-date-picker', 'el-input', 'el-select', 'el-option', 'el-button', 'el-table', 'el-checkbox', 'el-table-column', 'el-pagination'],
      mocks: { copyWord: function(target, times) { return 'abcde' } }

    })
    wrapper.setData({ list: testData })

    // const mockFn = jest.fn()

    // *test data / props
    // wrapper.vm.dataName / wrapper.vm.propsName
    // *test method inside SFC
    // const test = wrapper.vm.testMethod()

    // * Anyway
    // wrapper.vm === this

    // replace a function with stub
    sinon.stub(wrapper.vm, 'copyWord').callsFake(function(string, times) {
      return string.repeat(times * 2)
    })

    // check stub is working
    expect(wrapper.vm.copyWord('1', 5)).toBe(('11111').repeat(2))

    wrapper.vm.copyWord.restore()
    // remove stub
    expect(wrapper.vm.copyWord('1', 5)).toBe(('11111'))

    // yield test , todo
    const testYield = sinon.stub(wrapper.vm, 'copyWord')
    testYield.yields('1', 5)

    var callback = sinon.spy()
    wrapper.vm.copyWordWithCB('1', 5, callback)

    expect(callback.args).toBe(1)
  })

  /*  it('toggle click', () => {
      const wrapper = shallowMount(Hamburger)
      const mockFn = jest.fn()
      wrapper.vm.$on('toggleClick', mockFn)
      wrapper.find('.hamburger').trigger('click')
      expect(mockFn).toBeCalled()
    })
    it('prop isActive', () => {
      const wrapper = shallowMount(Hamburger)
      wrapper.setProps({ isActive: true })
      expect(wrapper.contains('.is-active')).toBe(true)
      wrapper.setProps({ isActive: false })
      expect(wrapper.contains('.is-active')).toBe(false)
    })*/
})

const testData = [{ 'id': 1, 'timestamp': 1397350757, 'author': 'Sandra', 'reviewer': 'Helen', 'title': 'Sugdbtew Sldwpv Gqs Hjiosxmu Sroxoyl Xnopptw', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 12.15, 'importance': 2, 'type': 'CN', 'status': 'published', 'display_time': '1978-09-23 12:50:50', 'comment_disabled': true, 'pageviews': 3370, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 2, 'timestamp': 1519932494843, 'author': 'George', 'reviewer': 'Dorothy', 'title': 'Tim Pvhtbs Olpnrl Csmcvy Qonvnig Jrdm Pzkgim', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 3.76, 'importance': 2, 'type': 'CN', 'status': 'draft', 'display_time': '1993-02-20 18:06:30', 'comment_disabled': true, 'pageviews': 4577, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 3, 'timestamp': 646876364673, 'author': 'Amy', 'reviewer': 'Jose', 'title': 'Vpprtrk Ddhuokfcq Unvhwr Pywjgsuvq Gni Xefn', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 14.34, 'importance': 2, 'type': 'US', 'status': 'draft', 'display_time': '1979-05-06 12:35:08', 'comment_disabled': true, 'pageviews': 4589, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 4, 'timestamp': 1103409238947, 'author': 'Richard', 'reviewer': 'Helen', 'title': 'Qursstv Edbrgz Dhgbeu Drxcgij Vixm Eqem Qkahustwth Eevba Wvsllfv Rgp', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 72.77, 'importance': 2, 'type': 'US', 'status': 'published', 'display_time': '2011-05-05 20:48:35', 'comment_disabled': true, 'pageviews': 360, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 5, 'timestamp': 42866440465, 'author': 'David', 'reviewer': 'Anthony', 'title': 'Jpvqrkoyc Cxhm Gfnyzlm Gnh Oryfogmvdt Wmzvq Pueeqbasl Cyqx Xqmtvjfesw', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 95.56, 'importance': 1, 'type': 'CN', 'status': 'draft', 'display_time': '1999-01-20 18:34:58', 'comment_disabled': true, 'pageviews': 4529, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 6, 'timestamp': 728061341535, 'author': 'Shirley', 'reviewer': 'Jason', 'title': 'Vahklyobmp Jphli Tzrnzpbsk Unrol Uvic Ysprfyp Tmptkwxy Laamx Vbckwmkb', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 42.04, 'importance': 2, 'type': 'US', 'status': 'published', 'display_time': '1984-03-29 05:35:41', 'comment_disabled': true, 'pageviews': 3391, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 7, 'timestamp': 583156810735, 'author': 'Frank', 'reviewer': 'Richard', 'title': 'Llxunv Hvhjhjoxgn Ytfp Tajgh Bdo Qnfm Cfy', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 16.68, 'importance': 2, 'type': 'JP', 'status': 'draft', 'display_time': '2008-02-10 11:44:43', 'comment_disabled': true, 'pageviews': 621, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 8, 'timestamp': 155830253011, 'author': 'Michelle', 'reviewer': 'Anna', 'title': 'Axiixyaxl Bmxx Xndytgarif Geibnkcf Lncqrgpw Blyhgcu Wdgujoyeu Djumkfghz Rhhedu', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 9.26, 'importance': 3, 'type': 'EU', 'status': 'published', 'display_time': '1996-05-19 11:48:38', 'comment_disabled': true, 'pageviews': 1124, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 9, 'timestamp': 274186754858, 'author': 'Mary', 'reviewer': 'Paul', 'title': 'Yhaceofdn Gxiijd Dhzgxn Qgmlsns Kvosq Lysmamljm Ornryflm', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 76.54, 'importance': 3, 'type': 'JP', 'status': 'draft', 'display_time': '1988-03-30 06:16:42', 'comment_disabled': true, 'pageviews': 4992, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 10, 'timestamp': 537422231735, 'author': 'Susan', 'reviewer': 'Frank', 'title': 'Rvx Rhok Nhjjnpay Tbjl Kyub Qbk Cwkklq', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 85.56, 'importance': 2, 'type': 'JP', 'status': 'draft', 'display_time': '2005-04-18 03:34:45', 'comment_disabled': true, 'pageviews': 4040, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 11, 'timestamp': 1119380485093, 'author': 'Shirley', 'reviewer': 'Carol', 'title': 'Tza Imsjko Jpqwh Ggvsazhep Jgync Oqolk Gbbcr', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 27.98, 'importance': 2, 'type': 'EU', 'status': 'published', 'display_time': '2012-07-26 20:00:23', 'comment_disabled': true, 'pageviews': 2007, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 12, 'timestamp': 384801322215, 'author': 'William', 'reviewer': 'Michelle', 'title': 'Hionrj Rkptdj Wqvt Yfpvku Hws Uxwbmos Xytpgqsw Chcki Ssiztwk Ofkntynor', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 37.37, 'importance': 2, 'type': 'EU', 'status': 'published', 'display_time': '1975-02-17 13:18:07', 'comment_disabled': true, 'pageviews': 982, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 13, 'timestamp': 1301121556913, 'author': 'Michelle', 'reviewer': 'Sharon', 'title': 'Ulp Jivdn Gzdy Pjhyfd Kvyizyk Fxsiwmki Hiibmr Tvmhu Rdqchbto Aptcfqb', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 17.06, 'importance': 2, 'type': 'CN', 'status': 'published', 'display_time': '1995-04-19 11:48:01', 'comment_disabled': true, 'pageviews': 4915, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 14, 'timestamp': 1509895696972, 'author': 'Helen', 'reviewer': 'Jason', 'title': 'Dvmjc Rnqandtqth Iqxqybhrm Ybfqryqxr Twsofbwtt', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 77.71, 'importance': 2, 'type': 'JP', 'status': 'draft', 'display_time': '1993-08-24 12:03:40', 'comment_disabled': true, 'pageviews': 812, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 15, 'timestamp': 89911982858, 'author': 'Lisa', 'reviewer': 'Joseph', 'title': 'Xgyjsqqt Kblqva Nrfgpf Vaoqsxuro Elmoelwp Gyegpd Keudgbhp', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 19.03, 'importance': 2, 'type': 'JP', 'status': 'published', 'display_time': '1970-03-26 17:34:21', 'comment_disabled': true, 'pageviews': 4926, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 16, 'timestamp': 591934249738, 'author': 'Edward', 'reviewer': 'Shirley', 'title': 'Iiyqpkzvp Ltgmvexv Oswdv Wymfpfdi Xeevcy Tmlqiwgc Umrutfmi Oduj Gbojqsnfh', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 97.02, 'importance': 2, 'type': 'JP', 'status': 'published', 'display_time': '1985-10-31 10:26:30', 'comment_disabled': true, 'pageviews': 3409, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 17, 'timestamp': 797473362107, 'author': 'Dorothy', 'reviewer': 'Richard', 'title': 'Cvju Cmclbjfnu Cvsjqbl Gbblgoy Suqybwkji Xloniyln Qcujqofmyk', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 73.34, 'importance': 1, 'type': 'JP', 'status': 'draft', 'display_time': '2001-12-15 05:10:44', 'comment_disabled': true, 'pageviews': 2780, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 18, 'timestamp': 989278477698, 'author': 'Lisa', 'reviewer': 'William', 'title': 'Iouvj Hkcma Hwalnohi Aws Nngvv', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 38.84, 'importance': 2, 'type': 'US', 'status': 'published', 'display_time': '2000-01-08 03:23:34', 'comment_disabled': true, 'pageviews': 365, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 19, 'timestamp': 244441212905, 'author': 'Sharon', 'reviewer': 'Helen', 'title': 'Ylcylilu Ytncprdvc Vohmy Ajwhlwip Huoowhm Vxjwfx Grgjv Qjrcda', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 94.82, 'importance': 1, 'type': 'CN', 'status': 'draft', 'display_time': '2005-06-15 01:13:22', 'comment_disabled': true, 'pageviews': 3266, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }, { 'id': 20, 'timestamp': 1366032017038, 'author': 'Thomas', 'reviewer': 'Kevin', 'title': 'Xkcyn Zhdtsn Vijvazuux Tyvvtyb Fvx Lepqvdbo', 'content_short': 'mock data', 'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>', 'forecast': 67.86, 'importance': 1, 'type': 'CN', 'status': 'published', 'display_time': '1974-03-15 00:15:31', 'comment_disabled': true, 'pageviews': 4954, 'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3', 'platforms': ['a-platform'] }]
/*

describe('SvgIcon.vue', () => {
  it('iconClass', () => {
    const wrapper = shallowMount(SvgIcon, {
      propsData: {
        iconClass: 'test'
      }
    })
    expect(wrapper.find('use').attributes().href).toBe('#icon-test')
  })
  it('className', () => {
    const wrapper = shallowMount(SvgIcon, {
      propsData: {
        iconClass: 'test'
      }
    })
    expect(wrapper.classes().length).toBe(1)
    wrapper.setProps({ className: 'test' })
    expect(wrapper.classes().includes('test')).toBe(true)
  })
})
*/
